import React from 'react';
import { Star, MapPin, Package, TrendingUp, CheckCircle } from 'lucide-react';

export function Suppliers() {
  // Alisa's real localized supplier network synced with product line metrics
  const suppliers = [
    {
      id: 'SUP-001',
      name: 'KL Textile Hub',
      location: 'Kuala Lumpur, Malaysia',
      rating: 4.8,
      products: 145,
      orders: 1234,
      onTimeDelivery: 98,
      responseTime: '2h',
      verified: true,
      specialties: ['Clothing', 'Traditional Wear'],
    },
    {
      id: 'SUP-002',
      name: 'Kelantan Silk Mfg',
      location: 'Kota Bharu, Kelantan',
      rating: 4.6,
      products: 89,
      orders: 876,
      onTimeDelivery: 95,
      responseTime: '4h',
      verified: true,
      specialties: ['Baju Kurung', 'Premium Silk'],
    },
    {
      id: 'SUP-003',
      name: 'Hijab Wholesale Direct',
      location: 'Shah Alam, Selangor',
      rating: 4.7,
      products: 234,
      orders: 2156,
      onTimeDelivery: 96,
      responseTime: '3h',
      verified: true,
      specialties: ['Tudung Bawal', 'Shawls'],
    },
    {
      id: 'SUP-004',
      name: 'Raya Print Solution',
      location: 'Johor Bahru, Johor',
      rating: 4.9,
      products: 12,
      orders: 340,
      onTimeDelivery: 99,
      responseTime: '1h',
      verified: true,
      specialties: ['Accessories', 'Sampul Raya'],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-gray-900 text-xl font-semibold">Supplier Management</h2>
        <p className="text-sm text-gray-500 mt-1">Manage relationships with your dropshipping suppliers</p>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-gray-900 font-medium">{supplier.name}</h3>
                  {supplier.verified && (
                    <CheckCircle className="w-5 h-5 text-blue-600" title="Verified Supplier" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  {supplier.location}
                </div>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 bg-yellow-50 rounded-lg border border-yellow-100">
                <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                <span className="text-sm font-semibold text-yellow-900">{supplier.rating}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-4">
              {supplier.specialties.map((specialty) => (
                <span key={specialty} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-100">
                  {specialty}
                </span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Products</p>
                <p className="text-sm text-gray-900 flex items-center gap-1 mt-1 font-semibold">
                  <Package className="w-4 h-4 text-gray-400" />
                  {supplier.products}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Orders</p>
                <p className="text-sm text-gray-900 mt-1 font-semibold">{supplier.orders.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">On-Time Delivery</p>
                <p className="text-sm text-green-600 flex items-center gap-1 mt-1 font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {supplier.onTimeDelivery}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Response Time</p>
                <p className="text-sm text-gray-900 mt-1 font-semibold">{supplier.responseTime}</p>
              </div>
            </div>

            {/* AI Performance Score */}
            <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Performance Score</span>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {Math.round((supplier.onTimeDelivery + supplier.rating * 20) / 2)}/100
                </span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  style={{ width: `${(supplier.onTimeDelivery + supplier.rating * 20) / 2}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                View Products
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-white font-bold">AI</span>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-2">AI Supplier Recommendation</h3>
            <p className="text-sm text-gray-600 mb-3">
              Based on your order patterns and performance metrics, we recommend focusing on KL Textile Hub for
              traditional festive clothing. They have the highest on-time delivery rate and best response times in your network.
            </p>
            <p className="text-sm text-gray-600">
              Consider diversifying with Hijab Wholesale Direct for your product lines to reduce structural dependencies on single vendors during peak festive demand windows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}