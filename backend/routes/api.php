<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesImportController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\AiAssistantController;
use App\Http\Controllers\SettingsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 🚀 LIVE CIRCUIT CONNECTIONS FOR THE FRONTEND
Route::get('/dashboard-stats', [SalesImportController::class, 'index']);
Route::post('/import-sales', [SalesImportController::class, 'import']);

Route::get('/analytics', [AnalyticsController::class, 'getAnalyticsData']);
Route::get('/orders', [OrderController::class, 'getAllOrders']);
Route::get('/suppliers', [SupplierController::class, 'getAllSuppliers']);
Route::get('/ai-insights', [AiAssistantController::class, 'getAiInsights']);
Route::get('/settings', [SettingsController::class, 'getSystemSettings']);