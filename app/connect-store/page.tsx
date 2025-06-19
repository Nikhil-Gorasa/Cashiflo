import StoreConnectForm from '@/components/StoreConnectForm';
import { Store, Shield, Zap } from 'lucide-react';

export default function ConnectStore() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Connect Your Online Store
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seamlessly integrate your e-commerce platform with Cashiflo to start optimizing your payments and cashflow management.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Instant Setup</h3>
            <p className="text-slate-600">Connect your store in minutes with our simple integration process.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Secure Integration</h3>
            <p className="text-slate-600">Bank-grade security with encrypted data transmission and storage.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Store className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Multi-Platform</h3>
            <p className="text-slate-600">Support for Shopify, WooCommerce, Magento, and more platforms.</p>
          </div>
        </div>

        <StoreConnectForm />

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'What permissions does Cashiflo need?',
                answer: 'We only request the minimum permissions needed to process payments and sync transaction data. We never access customer personal information or store passwords.'
              },
              {
                question: 'How long does the integration take?',
                answer: 'Most integrations are completed within 5-10 minutes. Our system automatically verifies your store and sets up the necessary webhooks.'
              },
              {
                question: 'Can I disconnect my store anytime?',
                answer: 'Yes, you can disconnect your store at any time from your dashboard settings. All data syncing will stop immediately.'
              },
              {
                question: 'What happens to existing payment methods?',
                answer: 'Cashiflo works alongside your existing payment processors. You can gradually migrate to our optimized routing or keep both systems running.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}