<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function import(Request $request)
    {
        // 1. This grabs the file from the "Upload" button we will make
        $file = $request->file('csv_file');

        // 2. This opens the file to read it
        $handle = fopen($file->getPathname(), 'r');

        // 3. This skips the first line (the headers like Name, Price, Stock)
        fgetcsv($handle);

        // 4. This reads the data line-by-line and saves it to the database
        while (($row = fgetcsv($handle, 1000, ',')) !== FALSE) {
            Product::create([
                'name'  => $row[0], // Column 1 in your CSV
                'price' => $row[1], // Column 2 in your CSV
                'stock' => $row[2], // Column 3 in your CSV
            ]);
        }

        // 5. Close the file and go back to the page with a success message
        fclose($handle);
        return back()->with('success', 'Products imported successfully!');
    }
}
