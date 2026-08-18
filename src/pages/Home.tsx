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
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
        <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2500&auto=format&fit=crop"
            alt="Cinematic Perfume"
            className="w-full h-full object-cover opacity-70"
          />
          {/* Volumetric light simulation */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,230,211,0.15)_0%,transparent_60%)] mix-blend-screen" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 64 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-px bg-gradient-to-b from-transparent to-[#997A3D] mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="uppercase tracking-[0.5em] text-[10px] mb-8 text-[#E2C792] font-semibold"
          >
            Aura Lumina
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-serif text-6xl md:text-8xl lg:text-[9rem] tracking-tight mb-12 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-br from-white via-[#F5E6D3] to-white/50"
          >
            The Essence <br /> <span className="italic font-light">of Luxury</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/shop"
              className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white uppercase tracking-[0.3em] text-xs font-medium hover:bg-white hover:text-black transition-all duration-700 ease-out"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[#997A3D] uppercase tracking-[0.3em] text-[9px] mb-4 font-bold">Discover</span>
          <div className="w-px h-16 bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute inset-0 bg-[#E2C792]"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-40 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center mb-24"
          >
            <span className="text-[#997A3D] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Olfactory Wardrobe</span>
            <h2 className="font-serif text-5xl md:text-6xl text-zinc-900 mb-8 tracking-tight">Curated Collections</h2>
            <div className="w-16 h-px bg-zinc-300 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {collections.map((collection, i) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                key={collection.id}
                className="group relative h-[600px] lg:h-[800px] overflow-hidden bg-zinc-950 cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-1000" />
                
                {/* Elegant Content Reveal */}
                <div className="absolute inset-0 p-10 lg:p-14 flex flex-col justify-end text-white">
                  <div className="overflow-hidden mb-2">
                    <span className="block text-[#E2C792] uppercase tracking-[0.3em] text-[10px] font-bold transform translate-y-full opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      Explore
                    </span>
                  </div>
                  <h3 className="font-serif text-4xl lg:text-5xl mb-4 transition-transform duration-700 ease-out group-hover:-translate-y-2">{collection.name}</h3>
                  <p className="text-sm text-zinc-300/80 mb-8 max-w-sm font-light leading-relaxed transform translate-y-8 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100 delay-100">
                    {collection.description}
                  </p>
                  
                  <Link
                    to={`/shop?collection=${collection.name}`}
                    className="relative w-max overflow-hidden"
                  >
                    <span className="block uppercase tracking-[0.2em] text-[11px] font-medium pb-2 border-b border-white/30 text-white transition-colors duration-300 group-hover:border-[#E2C792] group-hover:text-[#E2C792]">
                      Discover Collection
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story (Cinematic text reveal) */}
      <section className="min-h-screen flex items-center justify-center bg-[#030303] text-white overflow-hidden relative py-32">
        {/* Deep ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(153,122,61,0.15)_0%,transparent_70%)] opacity-50 blur-3xl mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-px h-24 mx-auto bg-gradient-to-b from-transparent via-[#997A3D] to-transparent mb-16 origin-top"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 40, backgroundPosition: "0% 50%" }}
            whileInView={{ opacity: 1, y: 0, backgroundPosition: ["0% 50%", "100% 50%", "50% 50%"] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="font-serif text-4xl md:text-6xl lg:text-[5rem] leading-[1.2] md:leading-[1.2] lg:leading-[1.1] font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#806633] via-[#F5E6D3] to-[#806633] bg-[length:200%_auto] drop-shadow-2xl"
          >
            <span className="italic">"A fragrance is the invisible ink with which we write our memories.</span><br />
            We distill breathtaking emotion—capturing fleeting, beautiful moments in a bottle of eternity."
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-20 flex flex-col items-center"
          >
            <span className="uppercase tracking-[0.4em] text-[10px] text-[#997A3D] font-bold mb-4">The Master Perfumer</span>
            <div className="w-12 h-px bg-white/20" />
          </motion.div>
        </div>
        
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
           <img
            src="https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=2500&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover filter blur-md"
          />
        </div>
      </section>

      {/* Iconic Scents - Staggered Editorial Layout */}
      <section className="py-40 relative bg-[#FAFAFA] border-t border-zinc-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mb-40"
          >
            <span className="text-[#997A3D] uppercase tracking-[0.4em] text-[10px] font-bold mb-10 block">The Masterpieces</span>
            <h2 className="font-serif text-7xl md:text-8xl lg:text-[9rem] mb-12 tracking-tighter leading-[0.8] flex flex-col items-center relative">
              {/* Subtle gold glow behind text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#997A3D] opacity-10 blur-3xl rounded-full" />
              
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-700 to-black drop-shadow-sm pb-2">
                Iconic
              </span>
              <span className="relative z-10 italic font-light text-[#997A3D] text-6xl md:text-7xl lg:text-[8rem] -mt-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#E2C792] via-[#997A3D] to-[#806633]">
                Scents
              </span>
            </h2>
            <div className="w-px h-24 bg-gradient-to-b from-[#997A3D] to-transparent mx-auto mb-10" />
            <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              More than a fragrance—an invisible aura. Discover our most coveted creations, meticulously blended to leave an unforgettable signature.
            </p>
          </motion.div>

          <div className="space-y-40 lg:space-y-64">
            {bestSellers.map((product, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={product.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 relative`}>
                  {/* Huge Background Watermark Number */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'} text-[20rem] md:text-[30rem] font-serif font-bold text-black/[0.02] pointer-events-none select-none z-0 tracking-tighter leading-none`}>
                    0{i + 1}
                  </div>

                  {/* Image Block */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-3/5 relative z-10 group"
                  >
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Secondary Image on Hover */}
                      {product.images[1] && (
                        <motion.img
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          src={product.images[1]}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center">
                        <span className="text-white uppercase tracking-[0.3em] text-sm font-medium border border-white/50 px-8 py-4 backdrop-blur-md transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 hover:bg-white hover:text-black">
                          Discover
                        </span>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Text Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="w-full lg:w-2/5 relative z-10 flex flex-col justify-center"
                  >
                    <span className="text-[#997A3D] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                      {product.collection} Collection
                    </span>
                    <h3 className="font-serif text-5xl md:text-6xl text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                      {product.name}
                    </h3>
                    <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed mb-8">
                      {product.description}
                    </p>
                    
                    {/* Fragrance Notes Minimal Layout */}
                    <div className="mb-12 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 w-16">Top</span>
                        <div className="h-px bg-zinc-200 flex-1" />
                        <span className="text-sm text-zinc-800 font-medium">{product.notes.top.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 w-16">Heart</span>
                        <div className="h-px bg-zinc-200 flex-1" />
                        <span className="text-sm text-zinc-800 font-medium">{product.notes.heart.join(', ')}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-zinc-200">
                      <span className="text-2xl font-light text-zinc-900">{formatPrice(product.price)}</span>
                      <Link 
                        to={`/product/${product.id}`}
                        className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-900 hover:text-[#997A3D] transition-colors flex items-center gap-2 group"
                      >
                        Explore <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-40 text-center flex flex-col items-center"
          >
            <div className="w-px h-24 bg-zinc-300 mb-12" />
            <Link to="/shop" className="group relative inline-flex items-center justify-center bg-[#030303] overflow-hidden px-16 py-6 transition-all duration-700">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#997A3D] via-[#E2C792] to-[#997A3D] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 text-xs uppercase tracking-[0.4em] font-bold text-white group-hover:text-black transition-colors duration-700 flex items-center gap-4">
                Explore The Archive
                <span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
