import { useShop } from '@/context/ShopContext';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { X, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="pt-32 pb-32 max-w-3xl mx-auto px-4 text-center h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl mb-6">Your Wishlist</h1>
        <p className="text-zinc-500 mb-8">You haven't saved any items yet.</p>
        <Link
          to="/shop"
          className="px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Discover Scents
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="font-serif text-4xl text-zinc-900 mb-4">Wishlist</h1>
      <p className="text-zinc-500 mb-12 uppercase tracking-widest text-sm">{wishlist.length} Items</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {wishlist.map((product, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            key={product.id}
            className="group relative flex flex-col"
          >
            <button
              onClick={() => toggleWishlist(product)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors opacity-0 group-hover:opacity-100"
            >
              <X className="w-4 h-4" />
            </button>

            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            
            <div className="flex flex-col flex-grow">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{product.brand}</p>
              <h3 className="font-medium text-zinc-900 mb-1 hover:text-zinc-600 transition-colors">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
              <p className="text-zinc-900 mb-4">{formatPrice(product.price)}</p>
              
              <button
                onClick={() => addToCart(product, 1, product.sizes[0])}
                className="mt-auto w-full py-3 border border-zinc-900 text-zinc-900 uppercase tracking-widest text-xs font-medium hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
