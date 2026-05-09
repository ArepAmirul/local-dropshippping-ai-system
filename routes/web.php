<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('import');
});
use App\Http\Controllers\ProductController;

Route::post('/import-products', [ProductController::class, 'import'])->name('products.import');