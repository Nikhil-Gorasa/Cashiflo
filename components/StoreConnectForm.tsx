'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, Store, Link as LinkIcon } from 'lucide-react';

export default function StoreConnectForm() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle');

  const platforms = [
    { id: 'shopify', name: 'Shopify', description: 'Connect your Shopify store' },
    { id: 'woocommerce', name: 'WooCommerce', description: 'Connect your WooCommerce store' },
    { id: 'magento', name: 'Magento', description: 'Connect your Magento store' },
    { id: 'bigcommerce', name: 'BigCommerce', description: 'Connect your BigCommerce store' },
  ];

  const handleConnect = async () => {
    if (!selectedPlatform || !storeUrl) return;

    setIsConnecting(true);
    setConnectionStatus('connecting');

    // Simulate API call
    setTimeout(() => {
      setIsConnecting(false);
      setConnectionStatus('connected');
    }, 3000);
  };

  const steps = [
    { id: 1, name: 'Select Platform', status: selectedPlatform ? 'completed' : 'current' },
    { id: 2, name: 'Enter Store URL', status: storeUrl && selectedPlatform ? 'completed' : selectedPlatform ? 'current' : 'upcoming' },
    { id: 3, name: 'Verification', status: connectionStatus === 'connected' ? 'completed' : connectionStatus === 'connecting' ? 'current' : 'upcoming' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <nav aria-label="Progress">
          <ol className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                <div className="flex items-center">
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    {step.status === 'completed' ? (
                      <CheckCircle className="h-8 w-8 text-emerald-600" />
                    ) : step.status === 'current' ? (
                      <div className="h-8 w-8 rounded-full border-2 border-emerald-600 bg-white flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-emerald-600" />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full border-2 border-gray-300 bg-white" />
                    )}
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    step.status === 'completed' ? 'text-emerald-600' : 
                    step.status === 'current' ? 'text-slate-900' : 'text-slate-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {stepIdx !== steps.length - 1 && (
                  <div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        {connectionStatus === 'connected' ? (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Store Connected Successfully!</h3>
            <p className="text-slate-600 mb-6">
              Your {selectedPlatform} store has been connected to Cashiflo. You can now start processing payments and managing your cashflow.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Store className="w-5 h-5 text-emerald-600" />
                  <div className="text-left">
                    <p className="font-medium text-emerald-900 capitalize">{selectedPlatform} Store</p>
                    <p className="text-sm text-emerald-700">{storeUrl}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-emerald-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Connected</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Connect Your Store</h2>
              <p className="text-slate-600">
                Link your online store to start accepting payments and managing your cashflow with Cashiflo.
              </p>
            </div>

            {/* Platform Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Select Your Platform
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`p-4 text-left border rounded-lg transition-colors ${
                      selectedPlatform === platform.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-slate-900">{platform.name}</div>
                    <div className="text-sm text-slate-600">{platform.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Store URL Input */}
            {selectedPlatform && (
              <div className="mb-6">
                <label htmlFor="storeUrl" className="block text-sm font-medium text-slate-700 mb-2">
                  Store URL
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="url"
                    id="storeUrl"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    placeholder={`Enter your ${selectedPlatform} store URL`}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* Connect Button */}
            {selectedPlatform && storeUrl && (
              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <Store className="w-5 h-5" />
                    <span>Connect Store</span>
                  </>
                )}
              </button>
            )}

            {/* Security Note */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">Secure Connection</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    Your store credentials are encrypted and stored securely. We only access the minimum permissions required to process payments and manage your account.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}