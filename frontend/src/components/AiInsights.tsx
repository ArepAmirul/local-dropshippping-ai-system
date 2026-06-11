import React, { useEffect, useState } from 'react';

interface AlertItem {
    sku: string;
    name: string;
    avg_daily_sales: number;
    current_stock: number;
    days_until_stockout: number;
    status: 'CRITICAL' | 'WARNING' | 'SAFE';
}

export default function AiInsights() {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);
    const [dailyAvg, setDailyAvg] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8888/api/ai-forecast')
            .then(res => res.json())
            .then(data => {
                if(data.status === 'success') {
                    setAlerts(data.predictive_alerts);
                    setDailyAvg(data.overall_daily_forecast);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <div className="p-6 text-gray-600 font-medium">Loading Alisa's AI Predictions...</div>;

    return (
        <div className="p-6 max-w-6xl mx-auto space-y-6">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white shadow-md">
                <h1 className="text-2xl font-bold">AI Forecasting Engine</h1>
                <p className="opacity-90 mt-1">Predictive supply-chain analysis using Linear Regression & Moving Average models.</p>
                <div className="mt-4 text-3xl font-extrabold">{dailyAvg} Units/Day</div>
                <div className="text-sm text-purple-200 mt-1">Estimated System Demand Across Next 30 Days</div>
            </div>

            {/* Table Section */}
            <h2 className="text-xl font-bold text-gray-800 mt-8">⚠️ Stock Warning System (Predictive Alerting)</h2>
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b text-gray-600 text-sm font-semibold">
                            <th className="p-4">SKU</th>
                            <th className="p-4">Product Name</th>
                            <th className="p-4">Avg Daily Velocity</th>
                            <th className="p-4">Current Stock</th>
                            <th className="p-4">Days Until Stockout</th>
                            <th className="p-4">Risk Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y text-gray-700 text-sm">
                        {alerts.map((item) => (
                            <tr key={item.sku} className="hover:bg-gray-50 transition">
                                <td className="p-4 font-mono font-bold text-indigo-600">{item.sku}</td>
                                <td className="p-4 font-medium">{item.name}</td>
                                <td className="p-4">{item.avg_daily_sales} units/day</td>
                                <td className="p-4 font-semibold">{item.current_stock}</td>
                                <td className={`p-4 font-bold ${item.days_until_stockout < 5 ? 'text-red-600' : 'text-amber-600'}`}>
                                    {item.days_until_stockout} Days
                                </td>
                                <td className="p-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${
                                        item.status === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                                        item.status === 'WARNING' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                                    }`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}