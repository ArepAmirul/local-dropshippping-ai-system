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

        // These two lines calculate the numbers for your boxes
        $totalOrders = $allSales->count();
        $totalItems = $allSales->sum('quantity_sold');

        return view('import', compact('allSales', 'totalOrders', 'totalItems'));
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