import { ShoppingCart, Package, AlertTriangle, DollarSign, TrendingUp, Eye, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

export function Dashboard() {
  const [activeAiAction, setActiveAiAction] = useState<number | null>(null);

  const summaryCards = [
    {
      label: 'Total Orders',
      value: '1,247',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+8.5%',
      trend: 'up',
    },
    {
      label: 'Pending Shipments',
      value: '43',
      icon: Package,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '-2.3%',
      trend: 'down',
    },
    {
      label: 'Stock Alerts',
      value: '8',
      icon: AlertTriangle,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      change: '+3',
      trend: 'up',
    },
    {
      label: 'Revenue Today',
      value: '$12,458',
      icon: DollarSign,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+12%',
      trend: 'up',
    },
  ];

  const orders = [
    { id: 'ORD-1234', customer: 'Sarah Johnson', status: 'Processing', supplier: 'EcoSupply Co.', total: 89.99, statusColor: 'green' },
    { id: 'ORD-1235', customer: 'Michael Chen', status: 'Shipped', supplier: 'Fashion Direct', total: 156.50, statusColor: 'orange' },
    { id: 'ORD-1236', customer: 'Emma Wilson', status: 'Delivered', supplier: 'Tech World', total: 234.00, statusColor: 'blue' },
    { id: 'ORD-1237', customer: 'James Brown', status: 'Pending', supplier: 'EcoSupply Co.', total: 67.25, statusColor: 'yellow' },
    { id: 'ORD-1238', customer: 'Olivia Davis', status: 'Processing', supplier: 'Fitness Plus', total: 128.99, statusColor: 'green' },
    { id: 'ORD-1239', customer: 'Liam Martinez', status: 'Cancelled', supplier: 'Fashion Direct', total: 45.50, statusColor: 'red' },
    { id: 'ORD-1240', customer: 'Sophia Garcia', status: 'Shipped', supplier: 'EcoSupply Co.', total: 199.99, statusColor: 'orange' },
  ];

  const bestSellers = [
    { name: 'Eco Bamboo Flask', sales: 342, image: '🌿' },
    { name: 'Leather Handbag', sales: 289, image: '👜' },
    { name: 'Fitness Tracker', sales: 256, image: '⌚' },
    { name: 'Ceramic Mug Set', sales: 198, image: '☕' },
  ];

  const stockAlerts = [
    { name: 'Organic Cotton T-shirt', stock: 5, message: 'Only 5 left in stock!' },
    { name: 'Bamboo Cutlery Set', stock: 3, message: 'Only 3 left in stock!' },
    { name: 'Yoga Mat', stock: 7, message: 'Only 7 left in stock!' },
  ];

  const demandForecast = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 85 },
    { month: 'May', value: 92 },
    { month: 'Jun', value: 88 },
  ];

  const sentimentData = [
    { name: 'Positive', value: 74, color: '#10b981' },
    { name: 'Neutral', value: 16, color: '#6b7280' },
    { name: 'Negative', value: 10, color: '#ef4444' },
  ];

  const aiRecommendations = [
    { action: 'Restock Organic Cotton T-shirts', priority: 'High', type: 'stock', impact: '+$2,340/month' },
    { action: 'Run Discount on Bamboo Flasks', priority: 'Medium', type: 'promotion', impact: '+180 units' },
    { action: 'Increase price on Fitness Tracker by 8%', priority: 'Low', type: 'pricing', impact: '+$1,840/month' },
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-700',
      orange: 'bg-orange-100 text-orange-700',
      blue: 'bg-blue-100 text-blue-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      red: 'bg-red-100 text-red-700',
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Summary Cards */}
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
                <p className="text-2xl text-gray-900">{card.value}</p>
              </div>
            );
          })}
        </div>

        {/* Order Overview Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg text-gray-900">Order Overview</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View All
              <Eye className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-500">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500">Customer</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${getStatusColor(order.statusColor)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.supplier}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Best Selling Products */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-lg text-gray-900">Best Selling Products</h2>
            </div>
            <div className="p-5 space-y-4">
              {bestSellers.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-2xl">
                    {product.image}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.sales} sales</p>
                  </div>
                  <div className="text-2xl text-gray-300">#{index + 1}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stock Alerts */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg text-gray-900">Stock Alerts</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">Update Stock</button>
            </div>
            <div className="p-5 space-y-3">
              {stockAlerts.map((alert) => (
                <div key={alert.name} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{alert.name}</p>
                      <p className="text-xs text-red-700 mt-1">{alert.message}</p>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">{alert.stock} units</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - AI Insights */}
      <aside className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">AI</span>
            </div>
            <h2 className="text-lg text-gray-900">AI Insights</h2>
          </div>
          <button className="w-full text-sm text-blue-600 hover:text-blue-700 text-left">View AI Insights →</button>
        </div>

        {/* Demand Forecast */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-900 mb-3">Demand Forecast</h3>
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
              <span className="text-gray-600">Fitness Tracker</span>
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +15%
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Ceramic Mug Set</span>
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +12%
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Foldable Laptop Stand</span>
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +8%
              </span>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mb-6">
          <h3 className="text-sm text-gray-900 mb-3">Recommended Actions</h3>
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
                  <p className="text-xs text-gray-900 flex-1">{rec.action}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
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
                  <p className="text-xs text-green-600">{rec.impact}</p>
                  {activeAiAction !== index ? (
                    <button
                      onClick={() => setActiveAiAction(index)}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      Take Action →
                    </button>
                  ) : (
                    <div className="flex gap-1">
                      <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Apply
                      </button>
                      <button
                        onClick={() => setActiveAiAction(null)}
                        className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
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

        {/* Customer Sentiment */}
        <div>
          <h3 className="text-sm text-gray-900 mb-3">Customer Sentiment</h3>
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
                  <span className="text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}