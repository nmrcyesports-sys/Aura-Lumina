import { Link } from 'react-router-dom';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#030303] text-zinc-400 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {/* Brand */}
        <div className="space-y-8">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase text-white inline-block hover:text-[#E2C792] transition-colors">
            Aura Lumina
          </Link>
          <p className="text-sm font-light leading-loose max-w-xs text-zinc-500">
            Crafting memories through exquisite, meticulously blended fragrances. A symphony of rare ingredients and masterful perfumery.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-[#997A3D] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop?category=Women" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Women's</Link></li>
            <li><Link to="/shop?category=Men" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Men's</Link></li>
            <li><Link to="/shop?category=Unisex" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Unisex</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-[#997A3D] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Customer Care</h4>
          <ul className="space-y-4">
            <li><Link to="/contact" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors text-xs tracking-widest uppercase">FAQ</Link></li>
            <li><Link to="/track-order" className="hover:text-white transition-colors text-xs tracking-widest uppercase">Track Order</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[#997A3D] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Join The Society</h4>
          <p className="text-xs font-light leading-relaxed mb-6 text-zinc-500">Subscribe for exclusive releases, private events, and insider privileges.</p>
          <form className="relative group" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-white/20 py-3 pr-10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#997A3D] transition-colors rounded-none text-sm font-light tracking-wide"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-[#997A3D] transition-colors uppercase text-[10px] tracking-[0.2em] font-bold"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600 space-y-6 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} AURA LUMINA. All rights reserved.</p>
        <div className="flex space-x-8 items-center">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <div className="w-px h-4 bg-white/10 hidden md:block" />
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#997A3D] transition-colors" aria-label="Facebook">
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#997A3D] transition-colors" aria-label="Instagram">
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
