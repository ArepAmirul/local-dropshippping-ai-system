import { useState } from 'react';
import { Search, Plus, Edit, Trash2, TrendingUp, AlertTriangle } from 'lucide-react';

export function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  // Alisa's actual core product dataset synchronized with backend parameters
  const products = [
    {
      id: 'CLO-BM-001',
      name: 'Baju Melayu',
      category: 'Clothing',
      supplier: 'KL Textile Hub',
      cost: 60.0,
      price: 120.0,
      stock: 75,
      sold: 74,
      status: 'Active',
      aiScore: 92,
      emoji: '👕'
    },
    {
      id: 'CLO-BK-002',
      name: 'Baju Kurung Moden',
      category: 'Clothing',
      supplier: 'Kelantan Silk Mfg',
      cost: 40.0,
      price: 85.0,
      stock: 50,
      sold: 52,
      status: 'Warning',
      aiScore: 88,
      emoji: '✨'
    },
    {
      id: 'CLO-KS-003',
      name: 'Kurta Slim Fit',
      category: 'Clothing',
      supplier: 'KL Textile Hub',
      cost: 30.0,
      price: 65.0,
      stock: 5,
      sold: 38,
      status: 'Low Stock',
      aiScore: 84,
      emoji: '👕'
    },
    {
      id: 'HIJ-TB-004',
      name: 'Tudung Bawal',
      category: 'Hijab',
      supplier: 'Hijab Wholesale Direct',
      cost: 10.0,
      price: 25.0,
      stock: 10,
      sold: 29,
      status: 'Low Stock',
      aiScore: 90,
      emoji: '🧕'
    },
    {
      id: 'HIJ-TS-005',
      name: 'Tudung Shawl',
      category: 'Hijab',
      supplier: 'Hijab Wholesale Direct',
      cost: 15.0,
      price: 35.0,
      stock: 45,
      sold: 18,
      status: 'Active',
      aiScore: 79,
      emoji: '🧕'
    },
    {
      id: 'CLO-KP-006',
      name: 'Kain Pelikat',
      category: 'Clothing',
      supplier: 'Nusantara Weavers',
      cost: 12.0,
      price: 25.0,
      stock: 15,
      sold: 22,
      status: 'Low Stock',
      aiScore: 76,
      emoji: '👕'
    },
    {
      id: 'ACC-SR-007',
      name: 'Sampul Raya',
      category: 'Accessories',
      supplier: 'Raya Print Solution',
      cost: 1.5,
      price: 5.0,
      stock: 100,
      sold: 210,
      status: 'Warning',
      aiScore: 95,
      emoji: '🧧'
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-gray-900 text-xl font-semibold">Product Catalog</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your dropshipping product inventory</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm font-medium shadow-sm">
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
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const margin = ((product.price - product.cost) / product.price) * 100;
          return (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
              {/* Product Image Placeholder */}
              <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-b border-gray-100">
                <span className="text-5xl select-none">{product.emoji}</span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold text-base">{product.name}</h3>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">{product.id}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center shadow-sm">
                      <span className="text-white text-xs font-bold">{product.aiScore}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4 flex-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-gray-800 font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supplier:</span>
                    <span className="text-gray-800 font-medium">{product.supplier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cost:</span>
                    <span className="text-gray-900 font-semibold">RM {product.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-gray-900 font-semibold">RM {product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Margin:</span>
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {margin.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 text-sm">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Stock</p>
                    <p className="text-gray-900 font-bold mt-0.5">{product.stock} units</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Sold</p>
                    <p className="text-gray-900 font-bold mt-0.5">{product.sold} units</p>
                  </div>
                  <div>
                    <span
                      className={`inline-flex px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                        product.status === 'Low Stock'
                          ? 'bg-red-50 text-red-700 border border-red-100'
                          : product.status === 'Warning'
                          ? 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                          : 'bg-green-50 text-green-700 border border-green-100'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {product.status === 'Low Stock' && (
                  <div className="mb-4 p-2.5 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-xs text-red-700 font-medium">Reorder recommended immediately</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 text-sm font-medium">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-3 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
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