<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesImportController;
use App\Http\Controllers\ProductController;

// Route asal untuk Sales
Route::get('/', [SalesImportController::class, 'index']);
Route::post('/import-sales', [SalesImportController::class, 'import'])->name('sales.import');

// Route baru untuk Plug In Product ke Frontend
Route::get('/products', [ProductController::class, 'getAllProducts']);