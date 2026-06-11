<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesHistory;
use Exception;

class SalesImportController extends Controller
{
    // This part loads the dashboard boxes with live MySQL calculation metrics
    public function index()
    {
        $allSales = SalesHistory::latest()->get();

        // Alisa's fixed item price dictionary schema
        $pricingMaster = [
            'CLO-BM-001' => 120.00, // Baju Melayu
            'CLO-BK-002' => 85.00,  // Baju Kurung Moden
            'CLO-KS-003' => 65.00,  // Kurta Slim Fit
            'HIJ-TB-004' => 25.00,  // Tudung Bawal
            'HIJ-TS-005' => 35.00,  // Tudung Shawl
            'CLO-KP-006' => 25.00,  // Kain Pelikat
            'ACC-SR-007' => 5.00,   // Sampul Raya
        ];

        $totalOrders = $allSales->count();
        $totalItems = $allSales->sum('quantity_sold');
        
        // Compute live gross revenue based on quantities sold multiplied by retail prices
        $calculatedRevenue = 0;
        foreach ($allSales as $sale) {
            $pricePerUnit = $pricingMaster[$sale->sku] ?? 25.00; // default fallback matching average item cost
            $calculatedRevenue += ($sale->quantity_sold * $pricePerUnit);
        }

        // Format recent entries to drop straight into the dashboard overview table rows
        $recentOrders = $allSales->take(5)->values()->map(function($sale, $index) use ($pricingMaster) {
            $pricePerUnit = $pricingMaster[$sale->sku] ?? 25.00;
            $displayId = $sale->id ?? ($index + 1); // Uses index fallback if row ID is blank
            
            return [
                'id' => 'ORD-' . str_pad($displayId, 4, '0', STR_PAD_LEFT),
                'customer' => 'Customer #' . $displayId,
                'status' => 'Processing',
                'supplier' => $sale->platform ?? 'Shopee', // maps channel platform context string
                // FIXED: Changed from '$' to 'RM ' to perfectly align with Alisa's system currency mapping
                'total' => 'RM ' . number_format($sale->quantity_sold * $pricePerUnit, 2)
            ];
        });

        return response()->json([
            'status' => 'success',
            'totalOrders' => number_format($totalOrders),
            'totalItems' => number_format($totalItems),
            'totalRevenue' => 'RM ' . number_format($calculatedRevenue, 2),
            'recentOrders' => $recentOrders
        ]);
    }
    
    // This part handles the file upload safely
    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:csv,txt'
        ]);

        $file = $request->file('file');
        $handle = fopen($file->getRealPath(), 'r');
        
        // Skip header row
        fgetcsv($handle);

        try {
            while (($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
                // FIXED: Catch blank rows or malformed tail endings in the file array
                if (count($data) < 4 || empty($data[0])) {
                    continue;
                }

                SalesHistory::create([
                    'sku'           => trim($data[0]),
                    'platform'      => trim($data[1]),
                    'quantity_sold' => (int)$data[2],
                    'order_date'    => trim($data[3]),
                ]);
            }
        } catch (Exception $e) {
            fclose($handle);
            return redirect()->back()->with('error', 'Error parsing import file data: ' . $e->getMessage());
        }

        fclose($handle);
        return redirect('/')->with('success', 'Data updated successfully!');
    }
}