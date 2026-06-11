<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalesHistorySeeder extends Seeder
{
    public function run()
    {
        // 1. Path pointing from 'backend' up to 'ai-engine' folder
        $csvFilePath = base_path('../ai-engine/Sales_History.csv');

        $this->command->info("Checking data path: " . $csvFilePath);

        if (!file_exists($csvFilePath)) {
            $this->command->error("⚠️ ERROR: Cannot find the file here! Check your folder placement.");
            return;
        }

        // 2. Open the AI CSV file
        $file = fopen($csvFilePath, 'r');
        $header = fgetcsv($file); // Skip the header row
        
        $count = 0;
        DB::beginTransaction();
        try {
            while (($row = fgetcsv($file)) !== FALSE) {
                if (empty($row[0])) continue; // Skip completely blank rows

                // 3. Insert each row into your newly created MySQL 'orders' table
                DB::table('orders')->insert([
                    'order_date'    => $row[0],
                    'sku'           => $row[1],
                    'quantity_sold' => (int)$row[2],
                    'platform'      => $row[3],
                    'created_at'    => now(),
                    'updated_at'    => now(),
                ]);
                $count++;
            }
            DB::commit();
            $this->command->info("🎉 SUCCESS! Injected {$count} rows from the AI engine data file.");
        } catch (\Exception $e) {
            DB::rollBack();
            $this->command->error("❌ CRASHED: " . $e->getMessage());
        }

        fclose($file);
    }
}