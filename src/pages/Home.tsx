import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { products, collections } from '@/data/products';
import { formatPrice } from '@/lib/utils';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const bestSellers = products.filter(p => p.tags.includes('Best Seller')).slice(0, 4);

  return (
    <div className="bg-zinc-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
        <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2500&auto=format&fit=crop"
            alt="Cinematic Perfume"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Volumetric light simulation */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)] mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-sm mb-6 text-zinc-300"
          >
            Aura Lumina
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-8"
          >
            The Essence <br /> of Luxury
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/shop"
              className="px-8 py-4 bg-white text-zinc-900 uppercase tracking-widest text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/50 uppercase tracking-widest text-xs mb-4">Scroll to discover</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl text-zinc-900 mb-4">Curated Collections</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">Discover your signature scent</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              key={collection.id}
              className="group relative h-[600px] overflow-hidden bg-zinc-100 cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="font-serif text-3xl mb-3">{collection.name}</h3>
                <p className="text-sm text-zinc-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {collection.description}
                </p>
                <Link
                  to={`/shop?collection=${collection.name}`}
                  className="inline-block border-b border-white pb-1 w-max uppercase tracking-widest text-xs hover:text-zinc-300 hover:border-zinc-300 transition-colors"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Story (Cinematic text reveal) */}
      <section className="py-32 bg-zinc-950 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-3xl md:text-5xl leading-relaxed md:leading-relaxed"
          >
            "A fragrance is more than a scent; it is a memory waiting to be awakened. We craft liquid emotion, capturing the essence of the world's most exquisite ingredients."
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <span className="uppercase tracking-widest text-sm text-zinc-400">The Master Perfumer</span>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img
            src="https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=2500&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-serif text-4xl text-zinc-900 mb-4">Iconic Scents</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm">Our most coveted creations</p>
          </div>
          <Link to="/shop" className="hidden md:inline-block border-b border-zinc-900 pb-1 uppercase tracking-widest text-xs font-medium hover:text-zinc-600 transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={product.id}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-6">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Secondary Image on Hover */}
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
              <div className="text-center">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{product.brand}</p>
                <h3 className="font-medium text-lg text-zinc-900 mb-2">{product.name}</h3>
                <p className="text-zinc-600">{formatPrice(product.price)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
