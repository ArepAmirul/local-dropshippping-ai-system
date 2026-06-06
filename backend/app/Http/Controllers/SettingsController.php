<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function getSystemSettings()
    {
        return response()->json([
            'status' => 'success',
            'profile' => [
                'store_name' => 'My Dropship AI Store',
                'currency' => 'MYR',
                'notification_status' => 'ENABLED'
            ],
            'api_connections' => [
                'ai_engine_status' => 'CONNECTED',
                'database_sync' => 'SYNCHRONIZED'
            ]
        ], 200);
    }
}