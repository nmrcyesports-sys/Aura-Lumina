import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItemsCount, setIsCartOpen } = useShop();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=all' },
    { name: 'Men', path: '/shop?category=Men' },
    { name: 'Women', path: '/shop?category=Women' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent',
          isScrolled || !isHome
            ? 'bg-white/80 backdrop-blur-md py-4 border-zinc-200/50 shadow-sm'
            : 'bg-transparent py-6 text-white'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Links - Left */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[10px] uppercase tracking-[0.25em] font-medium hover:opacity-50 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 font-serif text-3xl tracking-[0.2em] uppercase transition-all duration-500",
              (isScrolled || !isHome) ? "text-zinc-900" : "text-white drop-shadow-md"
            )}
            style={{ fontWeight: 400 }}
          >
            Aura Lumina
          </Link>

          {/* Desktop Links - Right */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[10px] uppercase tracking-[0.25em] font-medium hover:opacity-50 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              onClick={onOpenSearch}
              className="hover:opacity-70 transition-opacity p-1"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to={isAuthenticated ? "/account" : "/account?mode=login"}
              className="hidden sm:block hover:opacity-70 transition-opacity p-1"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              to="/wishlist"
              className="hidden sm:block hover:opacity-70 transition-opacity p-1"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:opacity-70 transition-opacity p-1 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={cn(
                      "absolute -top-1 -right-1 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                      (isScrolled || !isHome) ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
                    )}
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85vw] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-zinc-100">
                <span className="font-serif text-xl tracking-widest uppercase">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg uppercase tracking-wider font-medium text-zinc-900 hover:text-zinc-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-zinc-100 flex flex-col space-y-6">
                  <Link to={isAuthenticated ? "/account" : "/account?mode=login"} className="flex items-center space-x-4 text-zinc-600 hover:text-zinc-900">
                    <User className="w-5 h-5" />
                    <span className="uppercase tracking-wider font-medium">Account</span>
                  </Link>
                  <Link to="/wishlist" className="flex items-center space-x-4 text-zinc-600 hover:text-zinc-900">
                    <Heart className="w-5 h-5" />
                    <span className="uppercase tracking-wider font-medium">Wishlist</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
