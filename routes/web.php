<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [App\Http\Controllers\SalesImportController::class, 'index']);
use App\Http\Controllers\SalesImportController;

Route::post('/import-sales', [SalesImportController::class, 'import'])->name('sales.import');