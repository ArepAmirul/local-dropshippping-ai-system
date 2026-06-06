<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function getAllSuppliers()
    {
        // Mock data supplier sementara untuk dipalam (plug in) ke frontend
        $suppliers = [
            ['id' => 1, 'name' => 'Supplier Utama Kedah', 'phone' => '012-3456789', 'status' => 'Active'],
            ['id' => 2, 'name' => 'China Dropship Agent', 'phone' => '017-9876543', 'status' => 'Active'],
            ['id' => 3, 'name' => 'Local Wholesaler KL', 'phone' => '011-1122334', 'status' => 'Pending']
        ];

        return response()->json([
            'status' => 'success',
            'count' => count($suppliers),
            'suppliers' => $suppliers
        ], 200);
    }
}