import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, Product } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category');
  const collectionFilter = searchParams.get('collection');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    if (collectionFilter && collectionFilter !== 'all') {
      result = result.filter(p => p.collection === collectionFilter);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured / default
        break;
    }

    return result;
  }, [categoryFilter, collectionFilter, sortBy]);

  const updateFilter = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <div className="bg-zinc-50 py-16 px-4 text-center border-b border-zinc-200">
        <h1 className="font-serif text-4xl sm:text-5xl text-zinc-900 mb-4">
          {categoryFilter ? `${categoryFilter}'s Collection` : collectionFilter && collectionFilter !== 'all' ? collectionFilter : 'All Fragrances'}
        </h1>
        <p className="text-zinc-500 uppercase tracking-widest text-sm">
          Discover our meticulously crafted creations
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-zinc-200 pb-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border-none uppercase tracking-widest text-sm font-medium pr-6 focus:ring-0 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Filters Sidebar */}
        <aside
          className={cn(
            "fixed inset-0 z-50 bg-white md:bg-transparent md:static md:w-64 flex-shrink-0 transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto md:overflow-visible",
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-6 md:p-0">
            <div className="flex justify-between items-center md:hidden mb-8">
              <span className="font-serif text-xl">Filters</span>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-10">
              {/* Category */}
              <div>
                <h4 className="uppercase tracking-widest text-xs font-medium text-zinc-900 mb-4">Category</h4>
                <ul className="space-y-3">
                  {['Men', 'Women', 'Unisex'].map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => updateFilter('category', categoryFilter === cat ? null : cat)}
                        className={cn(
                          "text-sm transition-colors",
                          categoryFilter === cat ? "text-zinc-900 font-medium" : "text-zinc-500 hover:text-zinc-900"
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Collections */}
              <div>
                <h4 className="uppercase tracking-widest text-xs font-medium text-zinc-900 mb-4">Collections</h4>
                <ul className="space-y-3">
                  {['Luxury Noir', 'Luminance', 'Elements', 'Heritage'].map(col => (
                    <li key={col}>
                      <button
                        onClick={() => updateFilter('collection', collectionFilter === col ? null : col)}
                        className={cn(
                          "text-sm transition-colors",
                          collectionFilter === col ? "text-zinc-900 font-medium" : "text-zinc-500 hover:text-zinc-900"
                        )}
                      >
                        {col}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 md:hidden">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-zinc-200">
            <span className="text-zinc-500 text-sm">{filteredProducts.length} Results</span>
            <div className="relative flex items-center">
              <span className="text-sm uppercase tracking-widest text-zinc-500 mr-2">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none text-sm font-medium pr-6 focus:ring-0 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-32">
              <h3 className="font-serif text-2xl mb-4">No products found</h3>
              <p className="text-zinc-500">Try adjusting your filters.</p>
              <button
                onClick={() => setSearchParams({})}
                className="mt-8 border-b border-zinc-900 pb-1 uppercase tracking-widest text-xs font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  key={product.id}
                  className="group cursor-pointer flex flex-col"
                >
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-6">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.images[1] && (
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      />
                    )}
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-zinc-900 text-white text-xs tracking-widest px-3 py-1 uppercase">
                        Sale
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{product.brand}</p>
                    <h3 className="font-medium text-lg text-zinc-900 mb-2 hover:text-zinc-600 transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="text-zinc-900">{formatPrice(product.price)}</p>
                        {product.originalPrice && (
                          <p className="text-zinc-400 line-through text-sm">{formatPrice(product.originalPrice)}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
