import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Package, User, MapPin, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Account() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  
  const [authMode, setAuthMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  // Sync auth mode
  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'register' || mode === 'login') {
      setAuthMode(mode);
    }
  }, [searchParams]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen pt-32 pb-32 flex items-center justify-center px-4 bg-zinc-50">
        <div className="w-full max-w-md bg-white p-8 sm:p-12 border border-zinc-100 shadow-sm">
          <h1 className="font-serif text-3xl mb-2 text-center">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-zinc-500 text-sm text-center mb-8">
            {authMode === 'login' 
              ? 'Enter your details to access your account.' 
              : 'Sign up to enjoy exclusive privileges.'}
          </p>

          <form onSubmit={handleAuth} className="space-y-4">
            {authMode === 'register' && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-zinc-900 text-white uppercase tracking-widest text-xs font-medium hover:bg-zinc-800 transition-colors mt-4"
            >
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-zinc-500">
            {authMode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button onClick={() => setAuthMode('register')} className="text-zinc-900 underline">Register</button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={() => setAuthMode('login')} className="text-zinc-900 underline">Sign In</button>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
  ];

  return (
    <div className="min-h-screen pt-32 pb-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl mb-12">My Account</h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-zinc-200">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full bg-zinc-200" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-zinc-500">{user.email}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors text-left",
                      activeTab === tab.id
                        ? "bg-zinc-900 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors text-left mt-8"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white p-8 border border-zinc-100">
            {activeTab === 'profile' && (
              <div>
                <h2 className="font-serif text-2xl mb-6">Profile Information</h2>
                <div className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                    <input type="text" defaultValue={user.name} className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                    <input type="email" defaultValue={user.email} className="w-full border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-900" />
                  </div>
                  <button className="px-8 py-3 bg-zinc-900 text-white uppercase tracking-widest text-xs font-medium hover:bg-zinc-800 transition-colors mt-4">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="font-serif text-2xl mb-6">Order History</h2>
                <div className="text-center py-12 border border-zinc-100 bg-zinc-50/50">
                  <Package className="w-8 h-8 text-zinc-300 mx-auto mb-4" />
                  <p className="text-zinc-500">You haven't placed any orders yet.</p>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h2 className="font-serif text-2xl mb-6">Saved Addresses</h2>
                <div className="text-center py-12 border border-zinc-100 bg-zinc-50/50">
                  <MapPin className="w-8 h-8 text-zinc-300 mx-auto mb-4" />
                  <p className="text-zinc-500 mb-4">No saved addresses.</p>
                  <button className="border-b border-zinc-900 pb-1 text-sm font-medium">Add New Address</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
