import { useState, useEffect } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { motion, AnimatePresence } from 'motion/react';
import { formatPrice } from '@/lib/utils';

export function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const results = query.length > 1
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.brand.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleProductClick = (id: string) => {
    onClose();
    navigate(`/product/${id}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-[90] flex flex-col"
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col">
            <div className="flex justify-end">
              <button onClick={onClose} className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto w-full">
              <div className="relative">
                <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search for fragrances, brands, or notes..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full text-2xl sm:text-4xl font-serif bg-transparent border-b-2 border-zinc-200 py-4 pl-12 pr-4 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
                />
              </div>

              <div className="mt-12 h-[60vh] overflow-y-auto pb-12">
                {query.length <= 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="uppercase tracking-widest text-xs font-medium text-zinc-500 mb-6">Trending Searches</h3>
                      <ul className="space-y-4">
                        {['Midnight Velvet', 'Oud', 'Summer Collection', 'Men\'s Perfume'].map((term) => (
                          <li key={term}>
                            <button
                              onClick={() => setQuery(term)}
                              className="text-lg text-zinc-700 hover:text-zinc-900 transition-colors"
                            >
                              {term}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : results.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {results.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="flex gap-4 cursor-pointer group"
                      >
                        <div className="w-20 h-24 bg-zinc-100 overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{product.brand}</span>
                          <h4 className="font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{product.name}</h4>
                          <span className="text-sm mt-2">{formatPrice(product.price)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-zinc-500 mt-12">
                    <p className="text-xl">No results found for "{query}"</p>
                    <p className="mt-2 text-sm">Try checking your spelling or using different keywords.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
