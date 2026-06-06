<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesImportController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\AiAssistantController;
use App\Http\Controllers\SettingsController; // Tambah ini

// Route sedia ada...
Route::get('/', [SalesImportController::class, 'index']);
Route::post('/import-sales', [SalesImportController::class, 'import'])->name('sales.import');
Route::get('/products', [ProductController::class, 'getAllProducts']);
Route::get('/analytics', [AnalyticsController::class, 'getAnalyticsData']);
Route::get('/suppliers', [SupplierController::class, 'getAllSuppliers']);
Route::get('/ai-insights', [AiAssistantController::class, 'getAiInsights']);

// Route Baru untuk Settings
Route::get('/settings', [SettingsController::class, 'getSystemSettings']);