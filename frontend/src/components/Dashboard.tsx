import React, { useEffect, useState } from 'react';
import { ShoppingCart, Package, AlertTriangle, DollarSign, TrendingUp, Eye, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface LiveBackendPayload {
  totalOrders: string;
  totalItems: string;
  totalRevenue: string;
  recentOrders: Array<{
    id: string;
    customer: string;
    status: string;
    supplier: string;
    total: string;
  }>;
}

export function Dashboard() {
  const [activeAiAction, setActiveAiAction] = useState<number | null>(null);
  const [liveData, setLiveData] = useState<LiveBackendPayload | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:8888/api/dashboard-stats')
      .then((res) => res.json())
      .then((data) => {
        setLiveData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Dashboard connection stream failed:", err);
        setLoading(false);
      });
  }, []);

  const getCardValue = (label: string) => {
    if (!liveData) return '...';
    switch (label) {
      case 'Total Orders': return liveData.totalOrders;
      case 'Total Items Sold': return liveData.totalItems;
      case 'Stock Alerts': return '3'; 
      case 'Revenue Calculated': return liveData.totalRevenue;
      default: return '0';
    }
  };

  const summaryCards = [
    {
      label: 'Total Orders',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+8.5%',
      trend: 'up',
    },
    {
      label: 'Total Items Sold',
      icon: Package,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: 'Live',
      trend: 'up',
    },
    {
      label: 'Stock Alerts',
      icon: AlertTriangle,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      change: '+3',
      trend: 'up',
    },
    {
      label: 'Revenue Calculated',
      icon: DollarSign,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+12%',
      trend: 'up',
    },
  ];

  // FIXED: Updated to Alisa's actual data products
  const bestSellers = [
    { name: 'Baju Melayu (CLO-BM-001)', sales: 74, image: '🌙' },
    { name: 'Baju Kurung Moden (CLO-BK-002)', sales: 52, image: '✨' },
    { name: 'Kurta Slim Fit (CLO-KS-003)', sales: 38, image: '👕' },
    { name: 'Tudung Bawal (HIJ-TB-004)', sales: 29, image: '🧕' },
  ];

  // FIXED: Updated to Alisa's actual low-stock items
  const stockAlerts = [
    { name: 'Kurta Slim Fit (CLO-KS-003)', stock: 5, message: 'Only 2.5 days left of safety stock!' },
    { name: 'Tudung Bawal (HIJ-TB-004)', stock: 10, message: 'Critical! Only 1.82 days left until stockout!' },
    { name: 'Kain Pelikat (CLO-KP-006)', stock: 15, message: 'Only 3.33 days left of inventory!' },
  ];

  const demandForecast = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 58 },
    { month: 'Mar', value: 89 },
    { month: 'Apr', value: 120 }, // Peak festive season forecast
    { month: 'May', value: 95 },
    { month: 'Jun', value: 70 },
  ];

  const sentimentData = [
    { name: 'Positive', value: 82, color: '#10b981' },
    { name: 'Neutral', value: 12, color: '#6b7280' },
    { name: 'Negative', value: 6, color: '#ef4444' },
  ];

  // FIXED: Actions reflect realistic inventory insights for your exact products
  const aiRecommendations = [
    { action: 'Restock Tudung Bawal immediately', priority: 'High', type: 'stock', impact: '+RM1,250/week' },
    { action: 'Run bundle promo on Baju Melayu + Sampul Raya', priority: 'Medium', type: 'promotion', impact: '+45 units' },
    { action: 'Adjust price safety factor on Kurta Slim Fit', priority: 'Low', type: 'pricing', impact: '+RM480/month' },
  ];

  if (loading) {
    return (
      <div className="flex-1 p-6 flex flex-col items-center justify-center min-h-[500px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-3"></div>
        <p className="text-gray-500 text-sm font-medium">Syncing live dashboard parameters...</p>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {summaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className={`${card.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${card.textColor}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {card.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {card.change}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-gray-900">{getCardValue(card.label)}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Order Overview</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium">
              View All
              <Eye className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Platform/Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {liveData?.recentOrders && liveData.recentOrders.length > 0 ? (
                  liveData.recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.supplier}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.total}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                      No active sales data records available. Please import a sales dataset file.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Best Selling Products</h2>
            </div>
            <div className="p-5 space-y-4">
              {bestSellers.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-2xl">
                    {product.image}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} sales</p>
                  </div>
                  <div className="text-2xl font-bold text-gray-300">#{index + 1}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Stock Alerts</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Update Stock</button>
            </div>
            <div className="p-5 space-y-3">
              {stockAlerts.map((alert) => (
                <div key={alert.name} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{alert.name}</p>
                      <p className="text-xs text-red-700 mt-1">{alert.message}</p>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">{alert.stock} units</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
          </div>
          <button className="w-full text-sm text-blue-600 hover:text-blue-700 text-left font-medium">View AI Insights →</button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Demand Forecast</h3>
          <div className="bg-blue-50 rounded-lg p-4 mb-3">
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={demandForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#6b7280" />
                <YAxis tick={{ fontSize: 10 }} stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Baju Melayu</span>
              <span className="text-green-600 flex items-center gap-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                +24%
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Baju Kurung Moden</span>
              <span className="text-green-600 flex items-center gap-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                +18%
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Kurta Slim Fit</span>
              <span className="text-green-600 flex items-center gap-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                +15%
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Recommended Actions</h3>
          <div className="space-y-2">
            {aiRecommendations.map((rec, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  rec.priority === 'High'
                    ? 'bg-red-50 border-red-200'
                    : rec.priority === 'Medium'
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-xs font-medium text-gray-900 flex-1">{rec.action}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-semibold ${
                      rec.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : rec.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {rec.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-green-600">{rec.impact}</p>
                  {activeAiAction !== index ? (
                    <button
                      onClick={() => setActiveAiAction(index)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Take Action →
                    </button>
                  ) : (
                    <div className="flex gap-1">
                      <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium">
                        Apply
                      </button>
                      <button
                        onClick={() => setActiveAiAction(null)}
                        className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Customer Sentiment</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-3 space-y-2">
              {sentimentData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}