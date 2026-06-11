import { useState, useEffect } from 'react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, DollarSign, ShoppingCart, Package, Calendar, ArrowUp, ArrowDown, Sparkles, Check } from 'lucide-react';

// Type definitions to keep TypeScript happy and secure
interface AnalyticsPayload {
  status: string;
  analytics: {
    total_revenue: number;
    total_transactions: number;
    performance_status: string;
    monthly_growth: string;
  };
  ai_forecasting: {
    predicted_next_month_sales: number;
    confidence_score: string;
    trend_direction: string;
    recommended_stock_increase: string;
  };
}

export function Analytics() {
  const [timeRange, setTimeRange] = useState('12M');
  const [appliedInsight, setAppliedInsight] = useState<number | null>(null);
  
  // ⚡ LIVE STATE FOR THE BACKEND PLUG-IN CIRCUIT
  const [backendData, setBackendData] = useState<AnalyticsPayload | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch live data straight from the Laravel backend endpoint
    fetch('http://127.0.0.1:8888/api/analytics')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network pipeline connection failed');
        }
        return response.json();
      })
      .then((data: AnalyticsPayload) => {
        setBackendData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error wiring into the analytics backend:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // --- Static Visual Backups (Retained for Figma parity where backend values aren't generated yet) ---
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
    { month: 'Dec', revenue: backendData?.analytics.total_revenue || 52100, orders: backendData?.analytics.total_transactions || 607, profit: 15630 },
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

  const demandForecast = [
    { week: 'W1', actual: 145, predicted: 148, upperBound: 165, lowerBound: 131 },
    { week: 'W2', actual: 178, predicted: 175, upperBound: 195, lowerBound: 155 },
    { week: 'W3', actual: 221, predicted: 215, upperBound: 240, lowerBound: 190 },
    { week: 'Next Month Forecast', actual: null, predicted: backendData?.ai_forecasting.predicted_next_month_sales ? Math.round(backendData.ai_forecasting.predicted_next_month_sales / 25) : 245, upperBound: backendData?.ai_forecasting.predicted_next_month_sales ? Math.round((backendData.ai_forecasting.predicted_next_month_sales * 1.1) / 25) : 275, lowerBound: backendData?.ai_forecasting.predicted_next_month_sales ? Math.round((backendData.ai_forecasting.predicted_next_month_sales * 0.9) / 25) : 215 },
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
      title: 'Revenue Status Evaluated',
      description: `Your automated store health has been flagged as "${backendData?.analytics.performance_status || 'Good'}". Current calculated growth trend is tracking at ${backendData?.analytics.monthly_growth || '12%'}.`,
      action: `System directive: ${backendData?.ai_forecasting.recommended_stock_increase || '15%'} target inventory scaling adjustment recommended.`,
      impact: `Trend evaluation: ${backendData?.ai_forecasting.trend_direction || 'UPWARD'}`,
      confidence: backendData?.ai_forecasting.confidence_score ? parseInt(backendData.ai_forecasting.confidence_score) : 89,
    },
    {
      title: 'Seasonal Trend Alert',
      description: 'Q4 historically shows 35% spike in electronics. Stock levels should increase by 40% within 2 weeks.',
      action: 'Preorder inventory from top suppliers',
      impact: 'Prevent stockouts',
      confidence: 88,
    },
  ];

  if (loading) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[50vh] gap-3">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500 font-medium">Powering up analytics circuit...</p>
      </div>
    );
  }

  // --- Map Active Dynamic Calculations ---
  const displayRevenue = backendData ? `RM ${backendData.analytics.total_revenue.toLocaleString()}` : '$542,100';
  const displayOrders = backendData ? backendData.analytics.total_transactions.toLocaleString() : '5,543';
  const displayAov = backendData && backendData.analytics.total_transactions > 0 
    ? `RM ${(backendData.analytics.total_revenue / backendData.analytics.total_transactions).toFixed(2)}` 
    : '$97.80';

  return (
    <div className="p-6">
      {/* Header with Time Range Selector */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Comprehensive insights powered by AI</p>
        </div>
        {error && (
          <div className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-lg">
            ⚠️ Using fallback parameters: Local backend server offline or inaccessible
          </div>
        )}
      </div>

      {/* Key Metrics Dashboard Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { label: 'Total Revenue', value: displayRevenue, change: backendData?.analytics.monthly_growth || '+23.5%', trend: 'up', icon: DollarSign, color: 'bg-green-500' },
          { label: 'Total Orders', value: displayOrders, change: '+18.2%', trend: 'up', icon: ShoppingCart, color: 'bg-blue-500' },
          { label: 'Avg Order Value', value: displayAov, change: '+4.3%', trend: 'up', icon: TrendingUp, color: 'bg-purple-500' },
          { label: 'Products Sold (Data Pool)', value: backendData ? displayOrders : '12,456', change: '+31.8%', trend: 'up', icon: Package, color: 'bg-orange-500' },
        ].map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{metric.label}</p>
                  <p className="text-2xl text-gray-900 mt-2 font-semibold">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <ArrowUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">{metric.change}</span>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
                <h3 className="text-sm font-medium text-gray-900 flex-1">{insight.title}</h3>
              </div>
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <Sparkles className="w-3 h-3" />
                {insight.confidence}% accuracy parameter
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">{insight.description}</p>
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-gray-900 font-medium mb-1">{insight.action}</p>
                <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
                  <TrendingUp className="w-3 h-3" />
                  {insight.impact}
                </p>
              </div>
              {appliedInsight !== index ? (
                <button
                  onClick={() => setAppliedInsight(index)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Execute AI Directive
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600 py-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Directive Applied Successfully</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">Revenue Trend Data Mapping</h2>
          <div className="flex items-center gap-2 text-xs text-blue-600">
            <Sparkles className="w-4 h-4" />
            Live Sync Engaged
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue (RM)" />
            <Line type="monotone" dataKey="orders" stroke="#8b5cf6" name="Total Transactions Tracked" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Demand Forecast Visual Mapping */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">AI Predictive Forecast Analytics</h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Confidence Score: {backendData?.ai_forecasting.confidence_score || '89%'}</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
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
            <Area type="monotone" dataKey="upperBound" stroke="none" fill="url(#forecastBand)" name="Confidence Boundary Max" />
            <Area type="monotone" dataKey="lowerBound" stroke="none" fill="white" />
            <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} name="Current Database Orders" dot={{ fill: '#10b981' }} />
            <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="AI Predicted Target Velocity" dot={{ fill: '#3b82f6' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}