<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesImportController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\AiAssistantController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\OrderController;

// 1. Route Asal (Dashboard & Import Sales)
Route::get('/', [SalesImportController::class, 'index']);
Route::post('/import-sales', [SalesImportController::class, 'import'])->name('sales.import');

// 2. Route Products
Route::get('/products', [ProductController::class, 'getAllProducts']);

// 3. Route Baharu (Analytics, Suppliers, AI Insights, Settings & Orders)
Route::get('/analytics', [AnalyticsController::class, 'getAnalyticsData']);
Route::get('/suppliers', [SupplierController::class, 'getAllSuppliers']);
Route::get('/ai-insights', [AiAssistantController::class, 'getAiInsights']);
Route::get('/settings', [SettingsController::class, 'getSystemSettings']);
Route::get('/orders', [OrderController::class, 'getAllOrders']);