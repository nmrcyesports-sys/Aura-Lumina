import { useShop } from '@/context/ShopContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal } = useShop();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <h2 className="text-lg font-serif uppercase tracking-widest">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 -mr-2 text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
                  <ShoppingBag className="w-12 h-12 stroke-[1]" />
                  <p className="uppercase tracking-widest text-sm">Your cart is empty</p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/shop');
                    }}
                    className="mt-4 px-8 py-3 bg-zinc-900 text-white text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                      <div className="w-24 h-32 bg-zinc-100 relative overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-zinc-900">{item.name}</h3>
                              <p className="text-sm text-zinc-500 mt-1">{item.selectedSize}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id, item.selectedSize)}
                              className="text-zinc-400 hover:text-zinc-900"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-zinc-200">
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="p-2 text-zinc-500 hover:text-zinc-900"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="p-2 text-zinc-500 hover:text-zinc-900"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-zinc-100 p-6 bg-zinc-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="uppercase tracking-widest text-sm font-medium">Subtotal</span>
                  <span className="font-serif text-xl">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-zinc-500 mb-6 uppercase tracking-wider text-center">
                  Shipping & taxes calculated at checkout
                </p>
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/cart');
                    }}
                    className="w-full py-4 bg-white border border-zinc-200 text-zinc-900 uppercase tracking-widest text-sm font-medium hover:bg-zinc-50 transition-colors"
                  >
                    View Cart
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
