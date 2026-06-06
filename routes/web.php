<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesImportController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\AiAssistantController;

// 1. Route asal untuk Sales / Dashboard
Route::get('/', [SalesImportController::class, 'index']);
Route::post('/import-sales', [SalesImportController::class, 'import'])->name('sales.import');

// 2. Route untuk Product
Route::get('/products', [ProductController::class, 'getAllProducts']);

// 3. Route Baharu untuk Plug In Frontend Golly
Route::get('/analytics', [AnalyticsController::class, 'getAnalyticsData']);
Route::get('/suppliers', [SupplierController::class, 'getAllSuppliers']);
Route::get('/ai-insights', [AiAssistantController::class, 'getAiInsights']);