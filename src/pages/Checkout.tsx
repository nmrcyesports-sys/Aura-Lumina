import { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { useNavigate, Link } from 'react-router-dom';
import { formatPrice, cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Lock } from 'lucide-react';

type CheckoutStep = 'contact' | 'address' | 'delivery' | 'payment';

export function Checkout() {
  const { cart, cartTotal } = useShop();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('contact');
  const [isProcessing, setIsProcessing] = useState(false);

  // Form States (Simulated)
  const [contact, setContact] = useState({ email: '', phone: '' });
  const [address, setAddress] = useState({ firstName: '', lastName: '', street: '', city: '', zip: '', country: 'US' });
  const [delivery, setDelivery] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const deliveryPrice = delivery === 'express' ? 25 : 0;
  const grandTotal = cartTotal + deliveryPrice;

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleNext = (nextStep: CheckoutStep) => {
    setCurrentStep(nextStep);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate Razorpay / Payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-confirmation');
    }, 2500);
  };

  const steps = [
    { id: 'contact', title: 'Contact' },
    { id: 'address', title: 'Address' },
    { id: 'delivery', title: 'Delivery' },
    { id: 'payment', title: 'Payment' }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="py-8 text-center border-b border-zinc-200 mb-12">
          <Link to="/" className="font-serif text-3xl tracking-widest uppercase inline-block">
            Aura Lumina
          </Link>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-zinc-500">
            <Lock className="w-3 h-3" /> Secure Checkout
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Checkout Flow */}
          <div className="w-full lg:w-3/5">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-12 text-xs uppercase tracking-widest overflow-x-auto pb-2">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex items-center gap-2 whitespace-nowrap">
                  <span className={cn(
                    "font-medium transition-colors",
                    currentStep === step.id ? "text-zinc-900" : "text-zinc-400"
                  )}>
                    {step.title}
                  </span>
                  {idx < steps.length - 1 && <ChevronRight className="w-3 h-3 text-zinc-300" />}
                </div>
              ))}
            </div>

            <div className="space-y-12">
              {/* CONTACT STEP */}
              <div className={cn("transition-opacity duration-300", currentStep !== 'contact' && currentStep !== 'address' && currentStep !== 'delivery' && currentStep !== 'payment' ? "opacity-50 pointer-events-none" : "")}>
                <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                  1. Contact Information
                  {currentStep !== 'contact' && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                </h2>
                {currentStep === 'contact' ? (
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={contact.email}
                      onChange={(e) => setContact({...contact, email: e.target.value})}
                      className="w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={contact.phone}
                      onChange={(e) => setContact({...contact, phone: e.target.value})}
                      className="w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
                    <button
                      onClick={() => handleNext('address')}
                      className="mt-4 px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
                    >
                      Continue to Delivery
                    </button>
                  </div>
                ) : (
                  <div className="text-sm text-zinc-600 border border-zinc-200 p-4 bg-white flex justify-between items-center">
                    <span>{contact.email || 'No email provided'}</span>
                    <button onClick={() => setCurrentStep('contact')} className="underline">Edit</button>
                  </div>
                )}
              </div>

              {/* ADDRESS STEP */}
              <div className={cn("transition-opacity duration-300", currentStep !== 'address' && currentStep !== 'delivery' && currentStep !== 'payment' ? "opacity-50 pointer-events-none hidden md:block" : "")}>
                <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                  2. Shipping Address
                  {(currentStep === 'delivery' || currentStep === 'payment') && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                </h2>
                {currentStep === 'address' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={address.firstName}
                        onChange={(e) => setAddress({...address, firstName: e.target.value})}
                        className="w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={address.lastName}
                        onChange={(e) => setAddress({...address, lastName: e.target.value})}
                        className="w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Street Address"
                      value={address.street}
                      onChange={(e) => setAddress({...address, street: e.target.value})}
                      className="w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={address.city}
                        onChange={(e) => setAddress({...address, city: e.target.value})}
                        className="col-span-2 w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={address.zip}
                        onChange={(e) => setAddress({...address, zip: e.target.value})}
                        className="col-span-1 w-full bg-white border border-zinc-200 p-4 focus:outline-none focus:border-zinc-900 transition-colors"
                      />
                    </div>
                    <button
                      onClick={() => handleNext('delivery')}
                      className="mt-4 px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
                    >
                      Continue to Shipping Method
                    </button>
                  </div>
                )}
                {(currentStep === 'delivery' || currentStep === 'payment') && (
                  <div className="text-sm text-zinc-600 border border-zinc-200 p-4 bg-white flex justify-between items-center">
                    <span>{address.street}, {address.city}, {address.zip}</span>
                    <button onClick={() => setCurrentStep('address')} className="underline">Edit</button>
                  </div>
                )}
              </div>

              {/* DELIVERY STEP */}
              <div className={cn("transition-opacity duration-300", currentStep !== 'delivery' && currentStep !== 'payment' ? "opacity-50 pointer-events-none hidden md:block" : "")}>
                <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                  3. Shipping Method
                  {currentStep === 'payment' && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                </h2>
                {currentStep === 'delivery' && (
                  <div className="space-y-4">
                    <label className={cn("flex items-center justify-between p-4 border cursor-pointer transition-colors", delivery === 'standard' ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 bg-white")}>
                      <div className="flex items-center gap-4">
                        <input type="radio" name="delivery" checked={delivery === 'standard'} onChange={() => setDelivery('standard')} className="accent-zinc-900 w-4 h-4" />
                        <div>
                          <p className="font-medium">Standard Delivery</p>
                          <p className="text-sm text-zinc-500">3-5 Business Days</p>
                        </div>
                      </div>
                      <span className="font-medium">Free</span>
                    </label>
                    <label className={cn("flex items-center justify-between p-4 border cursor-pointer transition-colors", delivery === 'express' ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 bg-white")}>
                      <div className="flex items-center gap-4">
                        <input type="radio" name="delivery" checked={delivery === 'express'} onChange={() => setDelivery('express')} className="accent-zinc-900 w-4 h-4" />
                        <div>
                          <p className="font-medium">Express Delivery</p>
                          <p className="text-sm text-zinc-500">1-2 Business Days</p>
                        </div>
                      </div>
                      <span className="font-medium">{formatPrice(25)}</span>
                    </label>
                    <button
                      onClick={() => handleNext('payment')}
                      className="mt-4 px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}
                {currentStep === 'payment' && (
                  <div className="text-sm text-zinc-600 border border-zinc-200 p-4 bg-white flex justify-between items-center">
                    <span>{delivery === 'standard' ? 'Standard Delivery (Free)' : 'Express Delivery ($25.00)'}</span>
                    <button onClick={() => setCurrentStep('delivery')} className="underline">Edit</button>
                  </div>
                )}
              </div>

              {/* PAYMENT STEP */}
              <div className={cn("transition-opacity duration-300", currentStep !== 'payment' ? "opacity-50 pointer-events-none hidden md:block" : "")}>
                <h2 className="font-serif text-2xl mb-6 flex items-center gap-3">
                  4. Payment
                </h2>
                {currentStep === 'payment' && (
                  <div className="space-y-6">
                    <p className="text-sm text-zinc-500">All transactions are secure and encrypted.</p>
                    
                    <div className="border border-zinc-200 bg-white rounded-sm overflow-hidden">
                      <div className="p-4 border-b border-zinc-200 bg-zinc-50 flex items-center gap-3">
                        <input type="radio" checked readOnly className="accent-zinc-900 w-4 h-4" />
                        <span className="font-medium">Credit / Debit Card (Demo)</span>
                      </div>
                      <div className="p-4 space-y-4 bg-white">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Expiration date (MM / YY)"
                            className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900"
                          />
                          <input
                            type="text"
                            placeholder="Security code"
                            className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Name on card"
                          className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full py-5 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                    >
                      {isProcessing ? (
                        <>Processing...</>
                      ) : (
                        <>Pay {formatPrice(grandTotal)}</>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 sticky top-32">
              <h3 className="font-serif text-xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 no-scrollbar">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-zinc-100 flex-shrink-0 relative">
                      <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-zinc-500 text-white text-[10px] flex items-center justify-center rounded-full z-10">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-zinc-500 mt-1">{item.selectedSize}</p>
                      <p className="text-sm mt-1">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-200 pt-6 space-y-4 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Shipping</span>
                  <span>{delivery === 'express' ? formatPrice(25) : 'Free'}</span>
                </div>
              </div>

              <div className="border-t border-zinc-900 pt-6">
                <div className="flex justify-between items-end">
                  <span className="font-medium uppercase tracking-widest text-sm">Total</span>
                  <span className="font-serif text-2xl">{formatPrice(grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
