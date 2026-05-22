import { Bell, User, Lock, Palette, Globe, CreditCard } from 'lucide-react';

export function Settings() {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Full Name', value: 'Admin User' },
        { label: 'Email', value: 'admin@dropship.com' },
        { label: 'Phone', value: '+1 (555) 123-4567' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Order Notifications', toggle: true, enabled: true },
        { label: 'Stock Alerts', toggle: true, enabled: true },
        { label: 'AI Recommendations', toggle: true, enabled: false },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      items: [
        { label: 'Two-Factor Authentication', toggle: true, enabled: false },
        { label: 'Login Alerts', toggle: true, enabled: true },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account and application preferences</p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-5 border-b border-gray-200 flex items-center gap-3">
                <Icon className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg text-gray-900">{section.title}</h2>
              </div>
              <div className="p-5 space-y-4">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    {item.toggle ? (
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          item.enabled ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            item.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    ) : (
                      <span className="text-sm text-gray-900">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
