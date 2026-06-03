<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesHistory;

class SalesImportController extends Controller
{
    // This part loads the dashboard boxes
    public function index()
{
    $allSales = SalesHistory::latest()->get();

    $totalOrders = $allSales->count();
    $totalItems = $allSales->sum('quantity_sold');

    return response()->json([
        'status' => 'success',
        'totalOrders' => $totalOrders,
        'totalItems' => $totalItems,
        'allSales' => $allSales
    ]);
}
    // This part handles the file upload
    public function import(Request $request)
    {
        $request->validate(['file' => 'required|mimes:csv,txt']);
        $file = $request->file('file');
        $handle = fopen($file->getRealPath(), 'r');
        fgetcsv($handle);

        while (($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
            SalesHistory::create([
                'sku'           => $data[0],
                'platform'      => $data[1],
                'quantity_sold' => $data[2],
                'order_date'    => $data[3],
            ]);
        }

        fclose($handle);
        return redirect('/')->with('success', 'Data updated successfully!');
    }
}