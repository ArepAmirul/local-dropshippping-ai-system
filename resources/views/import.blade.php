<!DOCTYPE html>
<html>
<head>
    <title>Gollyiana Dashboard</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 40px;">

    <div style="max-width: 800px; margin: auto; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        
        <h2 style="text-align: center; color: #333;">📊 Gollyiana Sales Dashboard</h2>

        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
            <div style="flex: 1; background: #007bff; color: white; padding: 20px; border-radius: 10px; text-align: center;">
                <h1 style="margin: 0;">{{ $totalOrders }}</h1>
                <p style="margin: 0;">Total Orders</p>
            </div>
            <div style="flex: 1; background: #28a745; color: white; padding: 20px; border-radius: 10px; text-align: center;">
                <h1 style="margin: 0;">{{ $totalItems }}</h1>
                <p style="margin: 0;">Items Sold</p>
            </div>
        </div>

        @if(session('success'))
            <div style="background: #d4edda; color: #155724; padding: 10px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
                {{ session('success') }}
            </div>
        @endif

        <div style="text-align: center; padding: 20px; border: 1px dashed #ccc; margin-bottom: 30px;">
            <form action="{{ route('sales.import') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <input type="file" name="file" accept=".csv" required>
                <button type="submit" style="background: #333; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-left: 10px;">
                    Import CSV
                </button>
            </form>
        </div>

        <h3 style="color: #333; border-bottom: 2px solid #f8f9fa; padding-bottom: 10px;">Recent Transactions</h3>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: #f2f2f2; text-align: left;">
                    <th style="padding: 12px; border-bottom: 2px solid #ddd;">SKU</th>
                    <th style="padding: 12px; border-bottom: 2px solid #ddd;">Platform</th>
                    <th style="padding: 12px; border-bottom: 2px solid #ddd;">Qty</th>
                    <th style="padding: 12px; border-bottom: 2px solid #ddd;">Date</th>
                </tr>
            </thead>
            <tbody>
                @foreach($allSales as $sale)
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #eee;">{{ $sale->sku }}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #eee;">{{ $sale->platform }}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #eee;">{{ $sale->quantity_sold }}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #eee;">{{ $sale->order_date }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>

    </div>
</body>
</html>