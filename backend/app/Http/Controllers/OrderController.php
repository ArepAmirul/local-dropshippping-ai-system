<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesHistory;

class OrderController extends Controller
{
    public function getAllOrders()
    {
        try {
            $orders = SalesHistory::latest()->take(10)->get();

            return response()->json([
                'status' => 'success',
                'count' => $orders->count(),
                'orders' => $orders
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}