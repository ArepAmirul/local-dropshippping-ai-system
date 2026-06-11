import { useState } from 'react';
import { Sparkles, Send, TrendingUp, DollarSign, Package, Lightbulb, Check, X, AlertTriangle, BarChart3, ShoppingCart } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AIAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Selamat datang! I'm your AI optimization assistant ready to help you. I've synced up with your Malaysian suppliers and product catalogs. I can help you maximize peak festive demand, optimize prices, project inventory velocities, and coordinate batch restocks. What shall we analyze today?",
    },
  ]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null);
  const [appliedActions, setAppliedActions] = useState<number[]>([]);

  // Actionable insight items fully customized for Alisa's actual product lineup
  const actionableSuggestions = [
    {
      id: 1,
      title: 'Restock Batch: Baju Melayu Teluk Belanga',
      description: 'Stock level critically low (12 units remaining). Fast velocity due to upcoming peak weekend shopping windows.',
      impact: '+RM 14,800 projected revenue',
      priority: 'High',
      type: 'stock',
      icon: Package,
      actions: [
        { label: 'Order 250 Units from KL Textile Hub', cost: 'RM 12,500', deliveryTime: '3 days' },
        { label: 'Order 100 Units (Urgent Express)', cost: 'RM 6,000', deliveryTime: '1-2 days' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { week: 'W1', current: 12, predicted: 45 },
        { week: 'W2', current: 12, predicted: 95 },
        { week: 'W3', current: 12, predicted: 180 },
        { week: 'W4', current: 12, predicted: 240 },
      ],
    },
    {
      id: 2,
      title: 'Bundle Promotion: Tudung Bawal Premium',
      description: 'Sales velocity slowed by 8% post-mid-month. High clearing opportunity via localized bundle mechanics.',
      impact: '+450 units moved / week',
      priority: 'Medium',
      type: 'promotion',
      icon: DollarSign,
      actions: [
        { label: 'Apply "Buy 3 Free 1 Combo"', cost: '-RM 5/unit margin', deliveryTime: 'Immediate' },
        { label: 'Apply 15% Standard Cart Discount', cost: '-RM 4.50/unit', deliveryTime: 'Immediate' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { week: 'W1', current: 80, withDiscount: 120 },
        { week: 'W2', current: 75, withDiscount: 195 },
        { week: 'W3', current: 70, withDiscount: 280 },
        { week: 'W4', current: 65, withDiscount: 450 },
      ],
    },
    {
      id: 3,
      title: 'Price Optimization: Baju Kurung Moden (Silk)',
      description: 'Competitor out-of-stock situation detected. Market analysis yields premium pricing opportunity with stable conversion.',
      impact: '+RM 3,450 net margin / month',
      priority: 'Medium',
      type: 'pricing',
      icon: TrendingUp,
      actions: [
        { label: 'Increase base price to RM 169.00', cost: '+RM 20.00/unit profit', deliveryTime: 'Immediate' },
        { label: 'Increase base price to RM 159.00', cost: '+RM 10.00/unit profit', deliveryTime: 'Immediate' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { price: 149, sales: 180, revenue: 26820 },
        { price: 159, sales: 175, revenue: 27825 },
        { price: 169, sales: 168, revenue: 28392 },
      ],
    },
    {
      id: 4,
      title: 'Add Rising Trend Line: Premium Keris Accessories',
      description: 'Search interest spikes across localized e-commerce channels for custom festive outfit accessories. Low competition.',
      impact: '+RM 5,200 revenue contribution',
      priority: 'High',
      type: 'product',
      icon: Lightbulb,
      actions: [
        { label: 'Source & Add to Catalog via Raya Print', cost: 'RM 1,500 batch cost', deliveryTime: '2 days' },
        { label: 'Hold & Research More Sources', cost: null, deliveryTime: null },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { month: 'Mar', searches: 450 },
        { month: 'Apr', searches: 920 },
        { month: 'May', searches: 2400 },
        { month: 'Jun', searches: 4890 },
      ],
    },
    {
      id: 5,
      title: 'Switch Vendor Route: Kain Pelikat Bulk',
      description: 'Nusantara Weavers reliability dropped below 90%. Kelantan Silk Mfg offers backup routing for raw blends.',
      impact: 'Stabilizes fulfillment rate above 96%',
      priority: 'Low',
      type: 'supplier',
      icon: Package,
      actions: [
        { label: 'Reroute orders to Kelantan Silk Mfg', cost: 'No fee transaction', deliveryTime: 'Immediate effect' },
        { label: 'Initiate Supplier Warning Route', cost: 'RM 0', deliveryTime: '24 hours' },
        { label: 'Dismiss', cost: null, deliveryTime: null },
      ],
      data: [
        { metric: 'Cost (RM)', current: 22, alternative: 24 },
        { metric: 'Quality Rating', current: 4.1, alternative: 4.7 },
        { metric: 'Delivery On-Time', current: 8.9, alternative: 9.5 },
      ],
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', content: input }]);

    setTimeout(() => {
      let response = '';
      const query = input.toLowerCase();

      if (query.includes('description') || query.includes('text') || query.includes('generate')) {
        response =
          "Here is your high-converting product description ready for copy-pasting:\n\n**Baju Melayu Teluk Belanga Slim Fit Premium - Koleksi Raya Edisi Terhad**\n\nTampil segak dan selesa di Hari Raya dengan Baju Melayu potongan modern slim-fit kami. Direka khas menggunakan kain premium berkualiti tinggi yang sejuk, menyerap peluh, dan tidak mudah renyuk.\n\n• **Potongan Leher Teluk Belanga Classic** dengan jahitan kemas dan eksklusif.\n• **Material Premium Cotton Blend** yang ultra-selesa untuk kegunaan seharian.\n• **Saku Sisi Ergonomik** tersembunyi untuk penampilan lebih kemas.\n• **Warna Tahan Pudar** - kekal vibrant selepas basuhan berkali-kali.\n\nSesuai dipadankan dengan Kain Samping songket pilihan anda untuk gaya raya klasik yang tiada tandingan! Tempah sekarang sebelum kehabisan saiz.";
      } else if (query.includes('demand') || query.includes('forecast') || query.includes('velocity')) {
        response =
          "Demand forecasting calculations updated using localized historical trends for the upcoming cycle:\n\n• **Baju Melayu Teluk Belanga**: +42% spike expected (Estimated 650 units velocity)\n• **Tudung Bawal Premium**: +18% increase (Estimated 890 units velocity)\n• **Kurta Slim Fit**: +25% increase (Estimated 420 units velocity)\n• **Sampul Raya Premium**: Stable peak plateau (Estimated 1,200 packs)\n\n**Strategic Warning**: Restock deadlines for KL Textile Hub must be completed within 48 hours to secure transit slots before freight lanes throttle.";
      } else if (query.includes('price') || query.includes('optim') || query.includes('margin')) {
        response =
          "Price elasticity modeling analysis finalized:\n\n1. **Baju Kurung Moden**: Current RM 149.00 → Recommended RM 169.00 (+13.4% margin change).\n   *Market context: Competitor inventory levels are zero, consumer willingness-to-pay remains high.*\n\n2. **Kurta Slim Fit**: Current RM 89.00 → Maintain price stability point.\n   *Conversion rate drops rapidly if raised above RM 95.00.*\n\n3. **Sampul Raya (Pack of 10)**: Recommended bundle add-on pricing at RM 2.50 per pack if checkout threshold clears RM 150.\n\nTotal expected net profit margin contribution optimization: +RM 4,280/month.";
      } else if (query.includes('recommend') || query.includes('trend')) {
        response =
          "Trending product catalog lines matching your local target demographic identifiers:\n\n1. **Premium Hand-Woven Songket Samping** - High search volume match with Baju Melayu listings.\n2. **Keris Brooch Accessories (Silver Blend)** - Micro-trend spiking among festive outfit personalization buyers.\n3. **Instant Premium Shawls (Soft Chiffon)** - High daily retention replacement lines for active workwear catalogs.\n\nAll targets can be fulfilled via your current Shah Alam or Johor Bahru shipping networks.";
      } else {
        response =
          "I can assist you with your operations:\n• Generating high-converting product descriptions (Baju Melayu, Kurung, Hijab)\n• Forecasting demand spikes and pipeline restock warnings\n• Price optimization metrics against regional fashion vendors\n• Adding high-margin seasonal trend products\n• Supplier delivery performance routing options\n\nWhat item or matrix line should we clear next?";
      }

      setMessages((prev) => [...prev, { type: 'ai', content: response }]);
    }, 1000);

    setInput('');
  };

  const handleApplyAction = (suggestionId: number, actionIndex: number) => {
    setAppliedActions([...appliedActions, suggestionId]);
    setSelectedSuggestion(null);
    
    const suggestion = actionableSuggestions.find(s => s.id === suggestionId);
    const action = suggestion?.actions[actionIndex];
    if (action && action.label !== 'Dismiss') {
      setMessages([
        ...messages,
        { type: 'user', content: `Apply Action: ${action.label} for ${suggestion?.title}` },
        { 
          type: 'ai', 
          content: `✓ Action completed and synchronized with supplier pipeline!\n\n"${action.label}" has been authorized and dispatched.\n\nExpected operational impact: ${suggestion?.impact}\nSupplier lead window: ${action.deliveryTime}\n\nSystem logs have been appended. Monitoring webhook for dispatch confirmations.` 
        },
      ]);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-6">
      {/* Header Panel */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-sm">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">AI Insights & Actions</h1>
            <p className="text-sm text-gray-500">Predictive Machine Learning Engine • {actionableSuggestions.length - appliedActions.length} actions pending validation</p>
          </div>
        </div>
      </div>

      {/* Actionable Suggestions Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {actionableSuggestions.map((suggestion) => {
          const Icon = suggestion.icon;
          const isApplied = appliedActions.includes(suggestion.id);
          const isSelected = selectedSuggestion === suggestion.id;

          return (
            <div
              key={suggestion.id}
              className={`bg-white rounded-lg shadow-sm border transition-all duration-200 ${
                isApplied
                  ? 'border-green-300 bg-green-50/40'
                  : isSelected
                  ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {/* Card Meta Content Block */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${isApplied ? 'bg-green-100' : 'bg-blue-50'}`}>
                      {isApplied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Icon className="w-5 h-5 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-base font-semibold ${isApplied ? 'text-green-900' : 'text-gray-900'} mb-1`}>
                        {suggestion.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{suggestion.description}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(suggestion.priority)}`}>
                    {suggestion.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-700 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {suggestion.impact}
                  </span>
                  {isApplied && (
                    <span className="text-xs font-bold text-green-600 flex items-center gap-1 bg-green-100/80 px-2 py-0.5 rounded">
                      <Check className="w-3 h-3" /> Activated
                    </span>
                  )}
                </div>
              </div>

              {/* Graphical Trend Inset */}
              <div className="p-4 bg-gray-50/70 border-b border-gray-100">
                <ResponsiveContainer width="100%" height={110}>
                  {suggestion.type === 'pricing' ? (
                    <BarChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="price" tick={{ fontSize: 10 }} stroke="#64748b" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#64748b" />
                      <Tooltip formatter={(value) => [`RM ${value}`, 'Revenue']} />
                      <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  ) : suggestion.type === 'product' ? (
                    <BarChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#64748b" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#64748b" />
                      <Tooltip formatter={(value) => [value, 'Regional Searches']} />
                      <Bar dataKey="searches" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  ) : suggestion.type === 'supplier' ? (
                    <BarChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="metric" tick={{ fontSize: 10 }} stroke="#64748b" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#64748b" />
                      <Tooltip />
                      <Bar dataKey="current" fill="#94a3b8" name="Nusantara Weavers" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="alternative" fill="#2563eb" name="Kelantan Silk Mfg" radius={[4, 4, 0, 0]} />
                      <Legend wrapperStyle={{ fontSize: '10px', marginTop: '4px' }} />
                    </BarChart>
                  ) : (
                    <LineChart data={suggestion.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="week" tick={{ fontSize: 10 }} stroke="#64748b" />
                      <YAxis tick={{ fontSize: 10 }} stroke="#64748b" />
                      <Tooltip />
                      <Line type="monotone" dataKey="current" stroke="#94a3b8" strokeDasharray="4 4" name="Baseline" />
                      <Line type="monotone" dataKey={suggestion.type === 'promotion' ? 'withDiscount' : 'predicted'} stroke="#2563eb" strokeWidth={2.5} dot={{ r: 3 }} name={suggestion.type === 'promotion' ? 'Optimized Promo' : 'Raya Forecast'} />
                      <Legend wrapperStyle={{ fontSize: '10px', marginTop: '4px' }} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>

              {/* Action Executive Trigger Section */}
              {!isApplied && (
                <div className="p-4 bg-white rounded-b-lg">
                  {!isSelected ? (
                    <button
                      onClick={() => setSelectedSuggestion(suggestion.id)}
                      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
                    >
                      Review & Execute Action
                    </button>
                  ) : (
                    <div className="space-y-2 animate-fadeIn">
                      {suggestion.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleApplyAction(suggestion.id, index)}
                          className={`w-full px-4 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between border ${
                            action.label === 'Dismiss'
                              ? 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                              : index === 0
                              ? 'bg-blue-600 text-white border-transparent hover:bg-blue-700 shadow-sm'
                              : 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100/80'
                          }`}
                        >
                          <span>{action.label}</span>
                          {action.cost && (
                            <span className="opacity-80 px-2 py-0.5 rounded bg-black/5 font-mono text-[10px]">
                              {action.cost} ({action.deliveryTime})
                            </span>
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

      {/* AI Chat Console Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-slate-50 to-blue-50/50">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            AI Interactive Console
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">Query demand curves, write description templates, or test pricing margins</p>
        </div>

        {/* Chat Stream Area */}
        <div className="h-96 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-2xl rounded-xl p-4 shadow-sm ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white border border-gray-200 text-gray-900 rounded-bl-none'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="flex items-center gap-1.5 mb-2 border-b border-gray-100 pb-1.5">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded flex items-center justify-center">
                      <span className="text-white text-[9px] font-extrabold">AI</span>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Engine Output</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed whitespace-pre-line font-medium">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Intent Triggers */}
        <div className="border-t border-gray-100 p-4 bg-gray-50/60">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Suggested Prompts:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Forecast demand for next month',
              'Optimize prices for top products',
              'Recommend trending products',
              'Generate product description for Baju Melayu',
            ].map((quickAction) => (
              <button
                key={quickAction}
                onClick={() => setInput(quickAction)}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors shadow-2xs"
              >
                {quickAction}
              </button>
            ))}
          </div>
        </div>

        {/* Text Entry Action Inset */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query localized stock trends, optimization matrices..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            <button
              onClick={handleSend}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm"
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