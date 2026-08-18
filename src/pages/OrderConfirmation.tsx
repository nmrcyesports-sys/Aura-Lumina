import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function OrderConfirmation() {
  const orderId = `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  
  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-32 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-8"
      >
        <Check className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <h1 className="font-serif text-4xl text-zinc-900 mb-4">Order Confirmed</h1>
        <p className="text-zinc-500 mb-8 leading-relaxed">
          Thank you for your purchase. We've received your order and are preparing it for shipment.
        </p>

        <div className="bg-white border border-zinc-200 p-6 mb-8 text-left">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Order Number</p>
          <p className="font-medium text-lg mb-4">{orderId}</p>
          
          <div className="h-px w-full bg-zinc-100 mb-4" />
          
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Estimated Delivery</p>
          <p className="font-medium">{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/account?tab=orders"
            className="px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-xs font-medium hover:bg-zinc-800 transition-colors"
          >
            Track Order
          </Link>
          <Link
            to="/shop"
            className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 uppercase tracking-widest text-xs font-medium hover:bg-zinc-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
