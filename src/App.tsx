import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from '@/context/ShopContext';
import { AuthProvider } from '@/context/AuthContext';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Shop } from '@/pages/Shop';
import { ProductDetails } from '@/pages/ProductDetails';
import { Cart } from '@/pages/Cart';
import { Checkout } from '@/pages/Checkout';
import { Account } from '@/pages/Account';
import { Wishlist } from '@/pages/Wishlist';
import { OrderConfirmation } from '@/pages/OrderConfirmation';
import { Contact } from '@/pages/Contact';
import { TrackOrder } from '@/pages/TrackOrder';
import { Shipping } from '@/pages/Shipping';
import { FAQ } from '@/pages/FAQ';
import { Legal } from '@/pages/Legal';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

export default function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="account" element={<Account />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="order-confirmation" element={<OrderConfirmation />} />
              <Route path="contact" element={<Contact />} />
              <Route path="track-order" element={<TrackOrder />} />
              <Route path="shipping" element={<Shipping />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="privacy" element={<Legal />} />
              <Route path="terms" element={<Legal />} />
            </Route>
          </Routes>
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
}
