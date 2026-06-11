<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->date('order_date');        // Matches Alisa's 'order_date' column
            $table->string('sku');             // Matches Alisa's 'sku' column
            $table->integer('quantity_sold');  // Matches Alisa's 'quantity_sold' column
            $table->string('platform');        // Matches Alisa's 'platform' column (Shopee/TikTok)
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};