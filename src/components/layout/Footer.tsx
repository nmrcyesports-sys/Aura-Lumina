import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-white inline-block">
            Aura Lumina
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Crafting memories through exquisite, meticulously blended fragrances. A symphony of rare ingredients and masterful perfumery.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop?category=Women" className="hover:text-white transition-colors text-sm">Women's Collection</Link></li>
            <li><Link to="/shop?category=Men" className="hover:text-white transition-colors text-sm">Men's Collection</Link></li>
            <li><Link to="/shop?category=Unisex" className="hover:text-white transition-colors text-sm">Unisex Collection</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors text-sm">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Customer Care</h4>
          <ul className="space-y-4">
            <li><Link to="/contact" className="hover:text-white transition-colors text-sm">Contact Us</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors text-sm">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors text-sm">FAQ</Link></li>
            <li><Link to="/track-order" className="hover:text-white transition-colors text-sm">Track Order</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">Join The List</h4>
          <p className="text-sm mb-4">Subscribe for exclusive updates, new arrivals, and insider privileges.</p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border-b border-zinc-800 py-3 pr-10 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors rounded-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white uppercase text-xs tracking-widest font-medium"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} AURA LUMINA. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
