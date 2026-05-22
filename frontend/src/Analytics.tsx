import { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, DollarSign, ShoppingCart, Package, Calendar, ArrowUp, ArrowDown, Sparkles, Check } from 'lucide-react';

export function Analytics() {
  const [timeRange, setTimeRange] = useState('12M');
  const [appliedInsight, setAppliedInsight] = useState<number | null>(null);

  const revenueData = [
    { month: 'Jan', revenue: 12400, orders: 145, profit: 3720 },
    { month: 'Feb', revenue: 15200, orders: 178, profit: 4560 },
    { month: 'Mar', revenue: 18900, orders: 221, profit: 5670 },
    { month: 'Apr', revenue: 22100, orders: 258, profit: 6630 },
    { month: 'May', revenue: 26800, orders: 312, profit: 8040 },
    { month: 'Jun', revenue: 31500, orders: 367, profit: 9450 },
    { month: 'Jul', revenue: 35200, orders: 410, profit: 10560 },
    { month: 'Aug', revenue: 38900, orders: 453, profit: 11670 },
    { month: 'Sep', revenue: 42600, orders: 496, profit: 12780 },
    { month: 'Oct', revenue: 45200, orders: 527, profit: 13560 },
    { month: 'Nov', revenue: 48900, orders: 569, profit: 14670 },
    { month: 'Dec', revenue: 52100, orders: 607, profit: 15630 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 45, color: '#3b82f6', revenue: 234500 },
    { name: 'Accessories', value: 30, color: '#8b5cf6', revenue: 156300 },
    { name: 'Wearables', value: 15, color: '#10b981', revenue: 78150 },
    { name: 'Office', value: 10, color: '#f59e0b', revenue: 52100 },
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 234, revenue: 21065, growth: 15 },
    { name: 'Smart Watch', sales: 156, revenue: 31198, growth: 22 },
    { name: 'Phone Case', sales: 445, revenue: 11116, growth: -5 },
    { name: 'Bluetooth Speaker', sales: 298, revenue: 23837, growth: 18 },
    { name: 'USB Cable', sales: 567, revenue: 7363, growth: 8 },
  ];

  const supplierPerformance = [
    { name: 'TechSupply Co.', orders: 450, onTime: 98, quality: 96, cost: 85 },
    { name: 'Gadget World', orders: 320, onTime: 95, quality: 94, cost: 78 },
    { name: 'Accessories Plus', orders: 560, onTime: 96, quality: 92, cost: 88 },
    { name: 'Office Essentials', orders: 180, onTime: 94, quality: 90, cost: 82 },
  ];

  const demandForecast = [
    { week: 'W1', actual: 145, predicted: 148, upperBound: 165, lowerBound: 131 },
    { week: 'W2', actual: 178, predicted: 175, upperBound: 195, lowerBound: 155 },
    { week: 'W3', actual: 221, predicted: 215, upperBound: 240, lowerBound: 190 },
    { week: 'W4', actual: null, predicted: 245, upperBound: 275, lowerBound: 215 },
    { week: 'W5', actual: null, predicted: 268, upperBound: 300, lowerBound: 236 },
    { week: 'W6', actual: null, predicted: 285, upperBound: 320, lowerBound: 250 },
  ];

  const customerSegmentation = [
    { segment: 'New', orders: 234, revenue: 18720, avgOrder: 80 },
    { segment: 'Returning', orders: 567, revenue: 62370, avgOrder: 110 },
    { segment: 'VIP', orders: 123, revenue: 36900, avgOrder: 300 },
  ];

  const performanceMetrics = [
    { metric: 'Conversion', value: 3.2, target: 4.0 },
    { metric: 'AOV', value: 97.8, target: 100 },
    { metric: 'Retention', value: 68, target: 75 },
    { metric: 'Satisfaction', value: 4.6, target: 4.5 },
    { metric: 'Delivery', value: 96, target: 95 },
  ];

  const aiInsights = [
    {
      title: 'Revenue Acceleration Detected',
      description: 'Your revenue is growing 23.5% YoY, outpacing industry average of 18%. Continue current marketing strategy.',
      action: 'Increase marketing budget by 15%',
      impact: '+$8,400/month',
      confidence: 92,
    },
    {
      title: 'Seasonal Trend Alert',
      description: 'Q4 historically shows 35% spike in electronics. Stock levels should increase by 40% within 2 weeks.',
      action: 'Preorder inventory from top suppliers',
      impact: 'Prevent stockouts',
      confidence: 88,
    },
    {
      title: 'Customer Retention Opportunity',
      description: 'Returning customers spend 37% more. Implement loyalty program to boost retention from 68% to 75%.',
      action: 'Launch loyalty rewards program',
      impact: '+$12,300/month',
      confidence: 85,
    },
  ];

  return (
    <div className="p-6">
      {/* Header with Time Range Selector */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Comprehensive insights powered by AI</p>
        </div>
        <div className="flex gap-2">
          {['7D', '30D', '3M', '12M'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Total Revenue', value: '$542,100', change: '+23.5%', trend: 'up', icon: DollarSign, color: 'bg-green-500' },
          { label: 'Total Orders', value: '5,543', change: '+18.2%', trend: 'up', icon: ShoppingCart, color: 'bg-blue-500' },
          { label: 'Avg Order Value', value: '$97.80', change: '+4.3%', trend: 'up', icon: TrendingUp, color: 'bg-purple-500' },
          { label: 'Products Sold', value: '12,456', change: '+31.8%', trend: 'up', icon: Package, color: 'bg-orange-500' },
        ].map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{metric.label}</p>
                  <p className="text-2xl text-gray-900 mt-2">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {metric.trend === 'up' ? (
                      <ArrowUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`${metric.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Actionable Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {aiInsights.map((insight, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-sm border-2 transition-all ${
              appliedInsight === index ? 'border-green-300 bg-green-50' : 'border-blue-200'
            }`}
          >
            <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">AI</span>
                </div>
                <h3 className="text-sm text-gray-900 flex-1">{insight.title}</h3>
              </div>
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <Sparkles className="w-3 h-3" />
                {insight.confidence}% confidence
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-gray-600 mb-4">{insight.description}</p>
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-900 mb-1">{insight.action}</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {insight.impact}
                </p>
              </div>
              {appliedInsight !== index ? (
                <button
                  onClick={() => setAppliedInsight(index)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Apply This Insight
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Applied Successfully</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Revenue & Profit Trend with Forecast */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">Revenue & Profit Analysis</h2>
          <div className="flex items-center gap-2 text-xs text-blue-600">
            <Sparkles className="w-4 h-4" />
            AI-Enhanced
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Revenue ($)"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorProfit)"
              name="Profit ($)"
            />
            <Line type="monotone" dataKey="orders" stroke="#8b5cf6" name="Orders" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Demand Forecast */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">AI Demand Forecast - Next 3 Weeks</h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">95% Accuracy</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={demandForecast}>
            <defs>
              <linearGradient id="forecastBand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="week" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="upperBound"
              stroke="none"
              fill="url(#forecastBand)"
              name="Confidence Band"
            />
            <Area
              type="monotone"
              dataKey="lowerBound"
              stroke="none"
              fill="white"
            />
            <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Actual Orders" dot={{ fill: '#10b981' }} />
            <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="Predicted Orders" dot={{ fill: '#3b82f6' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Category Performance */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg text-gray-900 mb-4">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: cat.color }} />
                  <span className="text-gray-700">{cat.name}</span>
                </div>
                <span className="text-gray-900">${cat.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Segmentation */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg text-gray-900 mb-4">Customer Segmentation</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customerSegmentation}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="segment" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($)" />
              <Bar dataKey="orders" fill="#8b5cf6" name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics Radar */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">Performance Metrics vs Target</h2>
          <div className="flex items-center gap-2 text-xs text-green-600">
            <TrendingUp className="w-4 h-4" />
            4/5 targets met
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={performanceMetrics}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="metric" stroke="#6b7280" />
            <PolarRadiusAxis stroke="#6b7280" />
            <Radar name="Current" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
            <Radar name="Target" dataKey="target" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products Performance */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg text-gray-900 mb-4">Top Products Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Product</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Sales</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Revenue</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Growth</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">AI Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topProducts.map((product) => (
                <tr key={product.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.sales} units</td>
                  <td className="px-6 py-4 text-sm text-gray-900">${product.revenue.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 text-sm ${
                        product.growth > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {product.growth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {Math.abs(product.growth)}%
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Optimize
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
