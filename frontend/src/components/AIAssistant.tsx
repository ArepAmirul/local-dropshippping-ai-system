import { useState } from 'react';
import { Sparkles, Send, TrendingUp, DollarSign, Package, Lightbulb, Check, X, AlertTriangle, BarChart3, ShoppingCart } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AIAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Hello! I\'m your AI assistant for dropshipping management. I can help you with product descriptions, demand forecasting, pricing optimization, and supplier recommendations. How can I assist you today?',
    },
  ]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null);
  const [appliedActions, setAppliedActions] = useState<number[]>([]);

  const actionableSuggestions = [
    {
      id: 1,
      title: 'Restock Organic Cotton T-shirt',
      description: 'Stock level critically low (5 units). Predicted demand: 45 units/week',
      impact: '+$2,340 revenue',
      priority: 'High',
      type: 'stock',
      icon: Package,
      actions: [
        { label: 'Order 100 Units', cost: '$1,200', deliveryTime: '5-7 days' },
        { label: 'Order 50 Units', cost: '$650', deliveryTime: '3-5 days' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { week: 'W1', current: 5, predicted: 12 },
        { week: 'W2', current: 5, predicted: 18 },
        { week: 'W3', current: 5, predicted: 25 },
        { week: 'W4', current: 5, predicted: 35 },
      ],
    },
    {
      id: 2,
      title: 'Run Discount on Bamboo Flask',
      description: 'Sales velocity down 15%. Competitors offering 20% discount',
      impact: '+180 units/month',
      priority: 'Medium',
      type: 'promotion',
      icon: DollarSign,
      actions: [
        { label: 'Apply 20% Discount', cost: '-$4/unit', deliveryTime: 'Immediate' },
        { label: 'Apply 15% Discount', cost: '-$3/unit', deliveryTime: 'Immediate' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { week: 'W1', current: 45, withDiscount: 55 },
        { week: 'W2', current: 42, withDiscount: 65 },
        { week: 'W3', current: 40, withDiscount: 72 },
        { week: 'W4', current: 38, withDiscount: 78 },
      ],
    },
    {
      id: 3,
      title: 'Increase Price on Fitness Tracker',
      description: 'Market analysis shows 8% price increase opportunity. Demand remains strong',
      impact: '+$1,840 revenue/month',
      priority: 'Medium',
      type: 'pricing',
      icon: TrendingUp,
      actions: [
        { label: 'Increase by 8%', cost: '+$10.40/unit', deliveryTime: 'Immediate' },
        { label: 'Increase by 5%', cost: '+$6.50/unit', deliveryTime: 'Immediate' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { price: 120, sales: 256, revenue: 30720 },
        { price: 126, sales: 248, revenue: 31248 },
        { price: 130, sales: 235, revenue: 30550 },
      ],
    },
    {
      id: 4,
      title: 'Add Trending Product: Wireless Charging Pad',
      description: 'Search volume up 45%. Low competition. Reliable suppliers available',
      impact: '+$3,200 revenue/month',
      priority: 'High',
      type: 'product',
      icon: Lightbulb,
      actions: [
        { label: 'Add to Catalog', cost: '$2,400 initial', deliveryTime: '7-10 days' },
        { label: 'Research More', cost: null, deliveryTime: null },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { month: 'Jan', searches: 1200 },
        { month: 'Feb', searches: 1450 },
        { month: 'Mar', searches: 1680 },
        { month: 'Apr', searches: 1890 },
        { month: 'May', searches: 2340 },
      ],
    },
    {
      id: 5,
      title: 'Switch Supplier for Phone Cases',
      description: 'Alternative supplier offers 12% lower cost with same quality rating',
      impact: '+$890 profit/month',
      priority: 'Low',
      type: 'supplier',
      icon: Package,
      actions: [
        { label: 'Switch Supplier', cost: 'Save $890/mo', deliveryTime: '2 weeks transition' },
        { label: 'Request Sample', cost: '$0', deliveryTime: '3-5 days' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { metric: 'Cost', current: 8.5, alternative: 7.5 },
        { metric: 'Quality', current: 4.5, alternative: 4.6 },
        { metric: 'Delivery', current: 7, alternative: 6 },
      ],
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', content: input }]);

    setTimeout(() => {
      let response = '';
      if (input.toLowerCase().includes('description')) {
        response =
          'Here\'s an optimized product description for Wireless Headphones:\n\n**Premium Wireless Headphones - Immersive Sound Experience**\n\nExperience crystal-clear audio with our premium wireless headphones. Features:\n• Active Noise Cancellation for distraction-free listening\n• 30-hour battery life for all-day use\n• Premium comfort with memory foam ear cushions\n• Bluetooth 5.0 for seamless connectivity\n\nPerfect for music lovers, commuters, and professionals. Order now and elevate your audio experience!';
      } else if (input.toLowerCase().includes('demand') || input.toLowerCase().includes('forecast')) {
        response =
          'Based on historical data and market trends, here\'s the demand forecast for next month:\n\n• Wireless Headphones: +15% increase (expected 270 units)\n• Smart Watch: +8% increase (expected 168 units)\n• Phone Case: -5% decrease (expected 422 units)\n• USB Cable: Stable (expected 567 units)\n\nRecommendation: Stock up on Wireless Headphones and Smart Watches. The holiday season is approaching, which drives electronics demand.';
      } else if (input.toLowerCase().includes('price') || input.toLowerCase().includes('optim')) {
        response =
          'Price optimization analysis complete:\n\n1. **Smart Watch**: Current $199.99 → Recommended $215.99 (+8%)\n   Market analysis shows room for price increase while maintaining competitiveness.\n\n2. **Wireless Headphones**: Current $89.99 → Optimal (no change)\n   Price is well-positioned in the market.\n\n3. **Laptop Stand**: Current $45.99 → Recommended $42.99 (-7%)\n   Slight reduction could increase sales volume by 20%.\n\nExpected revenue impact: +$2,340/month';
      } else if (input.toLowerCase().includes('recommend') || input.toLowerCase().includes('trend')) {
        response =
          'Here are trending products to consider adding:\n\n1. **Wireless Charging Pad** - High demand, 45% search increase\n2. **Smart LED Light Bulbs** - Growing market, low competition\n3. **Portable Power Bank** - Consistent demand, good margins\n4. **Fitness Tracker Bands** - Seasonal trend rising\n\nAll products align with your current electronics category and have reliable suppliers in your network.';
      } else {
        response =
          'I can help you with:\n• Generating product descriptions\n• Forecasting demand\n• Optimizing prices\n• Recommending trending products\n• Analyzing supplier performance\n\nWhat would you like to explore?';
      }

      setMessages((prev) => [...prev, { type: 'ai', content: response }]);
    }, 1000);

    setInput('');
  };

  const handleApplyAction = (suggestionId: number, actionIndex: number) => {
    setAppliedActions([...appliedActions, suggestionId]);
    setSelectedSuggestion(null);
    
    // Show success message
    const suggestion = actionableSuggestions.find(s => s.id === suggestionId);
    const action = suggestion?.actions[actionIndex];
    if (action && action.label !== 'Dismiss') {
      setMessages([
        ...messages,
        { type: 'user', content: `Apply: ${action.label} for ${suggestion?.title}` },
        { 
          type: 'ai', 
          content: `✓ Action applied successfully!\n\n"${action.label}" has been scheduled for ${suggestion?.title}.\n\nExpected impact: ${suggestion?.impact}\nDelivery: ${action.deliveryTime}\n\nI'll continue monitoring the results and provide updates.` 
        },
      ]);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Low':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-gray-900">AI Insights & Actions</h1>
            <p className="text-sm text-gray-500">Powered by advanced machine learning • {actionableSuggestions.length - appliedActions.length} pending actions</p>
          </div>
        </div>
      </div>

      {/* Actionable Suggestions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {actionableSuggestions.map((suggestion) => {
          const Icon = suggestion.icon;
          const isApplied = appliedActions.includes(suggestion.id);
          const isSelected = selectedSuggestion === suggestion.id;

          return (
            <div
              key={suggestion.id}
              className={`bg-white rounded-lg shadow-sm border-2 transition-all ${
                isApplied
                  ? 'border-green-300 bg-green-50'
                  : isSelected
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Header */}
              <div className="p-5 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-lg ${isApplied ? 'bg-green-100' : 'bg-blue-50'}`}>
                      {isApplied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Icon className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm ${isApplied ? 'text-green-900' : 'text-gray-900'} mb-1`}>
                        {suggestion.title}
                      </h3>
                      <p className="text-xs text-gray-600">{suggestion.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded border ${getPriorityColor(suggestion.priority)}`}>
                    {suggestion.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {suggestion.impact}
                  </span>
                  {isApplied && (
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Applied
                    </span>
                  )}
                </div>
              </div>

              {/* Visualization */}
              <div className="p-5 bg-gray-50">
                <ResponsiveContainer width="100%" height={120}>
                  {suggestion.type === 'pricing' ? (
                    <BarChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="price" tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#3b82f6" />
                    </BarChart>
                  ) : suggestion.type === 'product' ? (
                    <BarChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <Tooltip />
                      <Bar dataKey="searches" fill="#3b82f6" />
                    </BarChart>
                  ) : suggestion.type === 'supplier' ? (
                    <BarChart data={suggestion.data} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis type="number" tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <YAxis dataKey="metric" type="category" tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <Tooltip />
                      <Bar dataKey="current" fill="#94a3b8" name="Current" />
                      <Bar dataKey="alternative" fill="#3b82f6" name="Alternative" />
                    </BarChart>
                  ) : (
                    <LineChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="week" tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#6b7280" />
                      <Tooltip />
                      <Line type="monotone" dataKey="current" stroke="#94a3b8" name="Current" />
                      <Line type="monotone" dataKey={suggestion.type === 'promotion' ? 'withDiscount' : 'predicted'} stroke="#3b82f6" strokeWidth={2} name={suggestion.type === 'promotion' ? 'With Discount' : 'Predicted'} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>

              {/* Actions */}
              {!isApplied && (
                <div className="p-5 border-t border-gray-200">
                  {!isSelected ? (
                    <button
                      onClick={() => setSelectedSuggestion(suggestion.id)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Review & Take Action
                    </button>
                  ) : (
                    <div className="space-y-2">
                      {suggestion.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleApplyAction(suggestion.id, index)}
                          className={`w-full px-4 py-2 rounded-lg transition-colors text-sm flex items-center justify-between ${
                            action.label === 'Dismiss'
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              : index === 0
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          <span>{action.label}</span>
                          {action.cost && (
                            <span className="text-xs opacity-75">{action.cost}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AI Chat Interface */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100">
          <h2 className="text-lg text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            AI Assistant Chat
          </h2>
          <p className="text-xs text-gray-600 mt-1">Ask me anything about your dropshipping business</p>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-2xl rounded-lg p-4 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-gray-900'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <span className="text-xs text-gray-600">AI Assistant</span>
                  </div>
                )}
                <p className="text-sm whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <p className="text-xs text-gray-600 mb-2">Quick Actions:</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {[
              'Forecast demand for next month',
              'Optimize prices for top products',
              'Recommend trending products',
              'Generate product description',
            ].map((quickAction) => (
              <button
                key={quickAction}
                onClick={() => setInput(quickAction)}
                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {quickAction}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your dropshipping business..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
