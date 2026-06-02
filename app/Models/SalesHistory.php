<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SalesHistory extends Model
{
    // This table name matches what we created in the migration
    protected $table = 'sales_history';

    // This tells Laravel it's safe to write into these columns
    protected $fillable = [
        'sku',
        'platform',
        'quantity_sold',
        'order_date'
    ];
}
