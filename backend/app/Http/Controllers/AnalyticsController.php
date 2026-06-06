<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SalesHistory;

class AnalyticsController extends Controller
{
    public function getAnalyticsData()
    {
        try {
            // Tarik data jualan dari database untuk dibuat analytics
            $totalSales = SalesHistory::sum('price'); // Tukar ikut column harga awak kalau beza
            $salesCount = SalesHistory::count();

            return response()->json([
                'status' => 'success',
                'analytics' => [
                    'total_revenue' => $totalSales,
                    'total_transactions' => $salesCount,
                    'performance_status' => 'Good',
                    'monthly_growth' => '12%'
                ]
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}