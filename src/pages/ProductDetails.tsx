import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import { formatPrice, cn } from '@/lib/utils';
import { Heart, Minus, Plus, Star, Truck, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const product = products.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-32 text-center h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="border-b border-zinc-900 pb-1 uppercase tracking-widest text-sm">
          Return to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Images */}
          <div className="w-full lg:w-1/2 flex gap-4 h-[60vh] lg:h-[80vh]">
            <div className="hidden sm:flex flex-col gap-4 overflow-y-auto no-scrollbar py-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 h-24 bg-zinc-100 flex-shrink-0 relative overflow-hidden transition-all duration-300",
                    activeImage === idx ? "ring-1 ring-zinc-900" : "opacity-70 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-white relative overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </AnimatePresence>
            </div>
            {/* Mobile dots */}
            <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    activeImage === idx ? "bg-zinc-900" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-xs text-zinc-500 uppercase tracking-widest mb-2">{product.brand}</span>
            <h1 className="font-serif text-4xl sm:text-5xl text-zinc-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating) ? "text-zinc-900 fill-current" : "text-zinc-200"
                    )}
                  />
                ))}
                <span className="text-sm text-zinc-500 ml-2">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-end gap-4 mb-10">
              <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-zinc-400 line-through mb-0.5">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium uppercase tracking-widest">Select Size</span>
                <button className="text-xs text-zinc-500 underline underline-offset-4 hover:text-zinc-900">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-6 py-3 border text-sm transition-colors",
                      selectedSize === size
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-zinc-200 h-14 w-full sm:w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex justify-center items-center text-zinc-500 hover:text-zinc-900"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex justify-center items-center text-zinc-500 hover:text-zinc-900"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className="h-14 w-14 flex items-center justify-center border border-zinc-200 hover:border-zinc-400 transition-colors"
              >
                <Heart
                  className={cn("w-5 h-5", isInWishlist(product.id) ? "fill-red-500 stroke-red-500" : "text-zinc-900")}
                />
              </button>
            </div>

            {/* Promises */}
            <div className="grid grid-cols-2 gap-4 mb-12 pt-8 border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-zinc-400" />
                <span className="text-xs uppercase tracking-wider text-zinc-600">Complimentary Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-zinc-400" />
                <span className="text-xs uppercase tracking-wider text-zinc-600">Free Returns</span>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-8 border-b border-zinc-200 mb-8">
                {['description', 'notes', 'details'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-4 text-sm uppercase tracking-widest font-medium transition-colors relative",
                      activeTab === tab ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px] text-zinc-600 text-sm leading-relaxed">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'description' && (
                      <p>{product.description}</p>
                    )}
                    {activeTab === 'notes' && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-zinc-900 font-medium uppercase tracking-widest text-xs mb-2">Top Notes</h4>
                          <p>{product.notes.top.join(', ')}</p>
                        </div>
                        <div>
                          <h4 className="text-zinc-900 font-medium uppercase tracking-widest text-xs mb-2">Heart Notes</h4>
                          <p>{product.notes.heart.join(', ')}</p>
                        </div>
                        <div>
                          <h4 className="text-zinc-900 font-medium uppercase tracking-widest text-xs mb-2">Base Notes</h4>
                          <p>{product.notes.base.join(', ')}</p>
                        </div>
                      </div>
                    )}
                    {activeTab === 'details' && (
                      <ul className="space-y-4">
                        <li className="flex justify-between border-b border-zinc-100 pb-2">
                          <span className="text-zinc-400">Fragrance Family</span>
                          <span className="text-zinc-900">{product.fragranceFamily}</span>
                        </li>
                        <li className="flex justify-between border-b border-zinc-100 pb-2">
                          <span className="text-zinc-400">Longevity</span>
                          <span className="text-zinc-900">{product.longevity}</span>
                        </li>
                        <li className="flex justify-between border-b border-zinc-100 pb-2">
                          <span className="text-zinc-400">Sillage</span>
                          <span className="text-zinc-900">{product.sillage}</span>
                        </li>
                        <li className="flex justify-between pb-2">
                          <span className="text-zinc-400">Collection</span>
                          <span className="text-zinc-900">{product.collection}</span>
                        </li>
                      </ul>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
