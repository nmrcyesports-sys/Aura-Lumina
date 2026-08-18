import { useShop } from '@/context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState({ text: '', type: '' });

  const handleApplyCoupon = () => {
    if (coupon === 'WELCOME10') {
      setDiscount(cartTotal * 0.1);
      setCouponMessage({ text: '10% discount applied', type: 'success' });
    } else if (coupon === 'LUXURY15') {
      setDiscount(cartTotal * 0.15);
      setCouponMessage({ text: '15% discount applied', type: 'success' });
    } else {
      setDiscount(0);
      setCouponMessage({ text: 'Invalid coupon code', type: 'error' });
    }
  };

  const grandTotal = cartTotal - discount;

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-32 max-w-3xl mx-auto px-4 text-center h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl mb-6">Your Cart is Empty</h1>
        <p className="text-zinc-500 mb-8">Discover our exquisite collections and find your signature scent.</p>
        <Link
          to="/shop"
          className="px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Explore Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-zinc-900 mb-12">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-zinc-200 pb-4 mb-8 text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total</div>
          </div>

          <div className="space-y-8">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="col-span-1 md:col-span-6 flex gap-6">
                  <Link to={`/product/${item.id}`} className="w-24 h-32 bg-white flex-shrink-0 relative overflow-hidden group">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{item.brand}</span>
                    <Link to={`/product/${item.id}`} className="font-medium text-zinc-900 hover:text-zinc-600 transition-colors mb-1">
                      {item.name}
                    </Link>
                    <span className="text-sm text-zinc-500 mb-4">Size: {item.selectedSize}</span>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-xs text-zinc-400 uppercase tracking-widest hover:text-zinc-900 transition-colors w-max"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-between md:justify-center items-center">
                  <span className="md:hidden text-sm text-zinc-500">Quantity:</span>
                  <div className="flex items-center border border-zinc-200 h-10">
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      className="px-3 text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      className="px-3 text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-3 flex justify-between md:justify-end items-center">
                  <span className="md:hidden text-sm text-zinc-500">Total:</span>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-zinc-50 p-8 border border-zinc-100 sticky top-32">
            <h2 className="font-serif text-2xl mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-zinc-900">
                  <span>Discount</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-zinc-500">Shipping</span>
                <span className="uppercase text-xs tracking-widest">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-zinc-200 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-medium">Grand Total</span>
                <span className="font-serif text-2xl">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2 mb-8"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Coupon */}
            <div>
              <p className="text-xs uppercase tracking-widest font-medium text-zinc-900 mb-3">Promo Code</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter code (e.g. WELCOME10)"
                  className="flex-1 bg-white border border-zinc-200 px-4 py-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors uppercase"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-6 bg-zinc-100 text-zinc-900 uppercase tracking-widest text-xs font-medium hover:bg-zinc-200 transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponMessage.text && (
                <p className={`mt-2 text-xs ${couponMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {couponMessage.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
