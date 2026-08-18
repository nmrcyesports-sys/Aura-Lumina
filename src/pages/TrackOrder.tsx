import { useState } from 'react';
import { Package, Search } from 'lucide-react';
import { motion } from 'motion/react';

export function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-32 min-h-[80vh] bg-zinc-50 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-zinc-900 mb-4">Track Your Order</h1>
          <p className="text-zinc-500">Enter your order details to check the current delivery status.</p>
        </div>

        {!showResult ? (
          <form onSubmit={handleTrack} className="bg-white border border-zinc-200 p-8 sm:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Order Number</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ORD-123456"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full border border-zinc-200 p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="Email used for the order"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-zinc-200 p-4 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSearching ? 'Searching...' : (
                  <>
                    <Search className="w-4 h-4" />
                    Track Package
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-zinc-200 p-8 sm:p-12"
          >
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Order</p>
                <p className="font-medium text-lg">{orderId || 'ORD-948210'}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Status</p>
                <p className="font-medium text-lg text-zinc-900">In Transit</p>
              </div>
            </div>

            <div className="relative border-l border-zinc-200 ml-4 space-y-12 pb-4">
              <div className="relative">
                <div className="absolute -left-[21px] bg-zinc-900 w-10 h-10 rounded-full flex items-center justify-center text-white ring-4 ring-white">
                  <Package className="w-5 h-5" />
                </div>
                <div className="ml-10 pt-2">
                  <h4 className="font-medium text-zinc-900">Out for Delivery</h4>
                  <p className="text-sm text-zinc-500">Today, 8:45 AM</p>
                </div>
              </div>
              <div className="relative opacity-50">
                <div className="absolute -left-[9px] bg-zinc-300 w-4 h-4 rounded-full ring-4 ring-white mt-1.5" />
                <div className="ml-10">
                  <h4 className="font-medium text-zinc-900">Shipped</h4>
                  <p className="text-sm text-zinc-500">Yesterday, 2:30 PM</p>
                </div>
              </div>
              <div className="relative opacity-50">
                <div className="absolute -left-[9px] bg-zinc-300 w-4 h-4 rounded-full ring-4 ring-white mt-1.5" />
                <div className="ml-10">
                  <h4 className="font-medium text-zinc-900">Order Processed</h4>
                  <p className="text-sm text-zinc-500">Oct 24, 10:15 AM</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowResult(false)}
              className="mt-12 text-sm uppercase tracking-widest font-medium border-b border-zinc-900 pb-1"
            >
              Track Another Order
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
