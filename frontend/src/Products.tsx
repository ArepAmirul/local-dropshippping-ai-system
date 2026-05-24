import { useState } from 'react';
import { Search, Plus, Edit, Trash2, TrendingUp, AlertTriangle } from 'lucide-react';

export function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 'PRD-001',
      name: 'Wireless Headphones',
      category: 'Electronics',
      supplier: 'TechSupply Co.',
      cost: 45.0,
      price: 89.99,
      stock: 45,
      sold: 234,
      status: 'Active',
      aiScore: 92,
    },
    {
      id: 'PRD-002',
      name: 'Smart Watch',
      category: 'Wearables',
      supplier: 'Gadget World',
      cost: 120.0,
      price: 199.99,
      stock: 23,
      sold: 156,
      status: 'Active',
      aiScore: 88,
    },
    {
      id: 'PRD-003',
      name: 'Phone Case',
      category: 'Accessories',
      supplier: 'Accessories Plus',
      cost: 8.0,
      price: 24.99,
      stock: 150,
      sold: 445,
      status: 'Active',
      aiScore: 76,
    },
    {
      id: 'PRD-004',
      name: 'USB Cable',
      category: 'Accessories',
      supplier: 'TechSupply Co.',
      cost: 4.5,
      price: 12.99,
      stock: 8,
      sold: 567,
      status: 'Low Stock',
      aiScore: 84,
    },
    {
      id: 'PRD-005',
      name: 'Laptop Stand',
      category: 'Office',
      supplier: 'Office Essentials',
      cost: 22.0,
      price: 45.99,
      stock: 67,
      sold: 189,
      status: 'Active',
      aiScore: 79,
    },
    {
      id: 'PRD-006',
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      supplier: 'TechSupply Co.',
      cost: 38.0,
      price: 79.99,
      stock: 34,
      sold: 298,
      status: 'Active',
      aiScore: 90,
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-gray-900">Product Catalog</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your dropshipping product inventory</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search products, categories, suppliers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const margin = ((product.price - product.cost) / product.price) * 100;
          return (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-4xl text-gray-400">📦</span>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-gray-900">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{product.id}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs">{product.aiScore}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Category:</span>
                    <span className="text-gray-900">{product.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Supplier:</span>
                    <span className="text-gray-900">{product.supplier}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cost:</span>
                    <span className="text-gray-900">${product.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price:</span>
                    <span className="text-gray-900">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Margin:</span>
                    <span className="text-green-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {margin.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">Stock</p>
                    <p className="text-sm text-gray-900">{product.stock} units</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sold</p>
                    <p className="text-sm text-gray-900">{product.sold} units</p>
                  </div>
                  <div>
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        product.status === 'Low Stock'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {product.status === 'Low Stock' && (
                  <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-xs text-red-700">Reorder recommended</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
