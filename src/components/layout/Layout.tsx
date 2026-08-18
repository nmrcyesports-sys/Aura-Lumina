import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from '../shop/CartDrawer';
import { SearchOverlay } from '../shop/SearchOverlay';
import { useState } from 'react';

export function Layout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-800 selection:text-zinc-50">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <main className="flex-grow flex flex-col relative z-0">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
