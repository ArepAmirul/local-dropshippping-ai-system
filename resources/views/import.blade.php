<div style="padding: 50px; font-family: Arial, sans-serif; text-align: center;">
    <h2>Dropshipping AI - Product Importer</h2>

    @if(session('success'))
        <div style="color: green; margin-bottom: 20px;">{{ session('success') }}</div>
    @endif

    <form action="{{ route('products.import') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="csv_file" accept=".csv" required>
        <br><br>
        <button type="submit" style="padding: 10px 20px; background: blue; color: white; border: none; cursor: pointer;">
            Upload CSV File
        </button>
    </form>
</div>