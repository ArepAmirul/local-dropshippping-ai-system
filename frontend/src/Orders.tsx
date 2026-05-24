import { useState } from 'react';
import { Search, Filter, Download, Eye } from 'lucide-react';

export function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-1234',
      customer: 'John Doe',
      email: 'john@example.com',
      product: 'Wireless Headphones',
      quantity: 2,
      amount: 179.98,
      status: 'Processing',
      date: '2024-12-15',
      supplier: 'TechSupply Co.',
    },
    {
      id: 'ORD-1235',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      product: 'Smart Watch',
      quantity: 1,
      amount: 199.99,
      status: 'Shipped',
      date: '2024-12-14',
      supplier: 'Gadget World',
    },
    {
      id: 'ORD-1236',
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      product: 'Phone Case',
      quantity: 3,
      amount: 74.97,
      status: 'Delivered',
      date: '2024-12-13',
      supplier: 'Accessories Plus',
    },
    {
      id: 'ORD-1237',
      customer: 'Sarah Williams',
      email: 'sarah@example.com',
      product: 'USB Cable',
      quantity: 5,
      amount: 64.95,
      status: 'Processing',
      date: '2024-12-15',
      supplier: 'TechSupply Co.',
    },
    {
      id: 'ORD-1238',
      customer: 'Tom Brown',
      email: 'tom@example.com',
      product: 'Laptop Stand',
      quantity: 1,
      amount: 45.99,
      status: 'Shipped',
      date: '2024-12-14',
      supplier: 'Office Essentials',
    },
    {
      id: 'ORD-1239',
      customer: 'Emily Davis',
      email: 'emily@example.com',
      product: 'Bluetooth Speaker',
      quantity: 1,
      amount: 79.99,
      status: 'Processing',
      date: '2024-12-15',
      supplier: 'TechSupply Co.',
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-gray-900">Orders Management</h2>
          <p className="text-sm text-gray-500 mt-1">Track and manage all your dropshipping orders</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Orders
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search orders, customers, products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Order ID</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Customer</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Product</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Quantity</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Amount</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Supplier</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-gray-900">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.quantity}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">${order.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.supplier}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          Showing {filteredOrders.length} of {orders.length} orders • Total Value: $
          {filteredOrders.reduce((sum, order) => sum + order.amount, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
