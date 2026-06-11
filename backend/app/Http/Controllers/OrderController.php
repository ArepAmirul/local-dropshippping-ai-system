<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesHistory;

class OrderController extends Controller
{
    public function getAllOrders()
    {
        try {
            // 1. Fetch the data from your sales_history table
            $orders = SalesHistory::latest()->take(10)->get();

            // 2. Map and reshape the rows to match exactly what your React UI wants
            $formattedOrders = $orders->map(function($order) {
                return [
                    'id'             => $order->id,
                    'customer_name'  => 'Customer #' . $order->id, // Default fallback name
                    'product_name'   => 'Dropship Package',
                    'quantity'       => $order->quantity_sold ?? 1,
                    'total_price'    => $order->revenue ?? 0.00,
                    
                    // CRITICAL FIX: This provides a valid string for .toLowerCase()
                    'status'         => 'completed', 
                    'payment_status' => 'paid', 
                    
                    'created_at'     => $order->created_at ? $order->created_at->toIso8601String() : now()->toIso8601String()
                ];
            });

            // 3. Return the clean, direct array instead of wrapping it inside an object
            return response()->json($formattedOrders, 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}