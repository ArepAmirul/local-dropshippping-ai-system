<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AiAssistantController extends Controller
{
    public function getAiInsights()
    {
        return response()->json([
            'status' => 'success',
            'ai_insights' => [
                'recommendation' => 'Stok produk hot-selling anda semakin berkurang. Sila hubungi Supplier Utama Kedah.',
                'top_selling_prediction' => 'Produk Kategori A dijangka naik 20% minggu depan.',
                'system_health' => 'Optimal'
            ]
        ], 200);
    }
}