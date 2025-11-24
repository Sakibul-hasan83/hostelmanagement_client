import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthenticationParts/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Apply", path: "/apply" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Bookings", path: "/bookings" },
    { name: "Manage Users", path: "/manage-users" },
    { name: "Payments", path: "/payments" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <nav className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-white font-bold text-xl sm:text-2xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl">🏨</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="hidden sm:inline text-2xl font-extrabold tracking-tight">GreenStay</span>
              <span className="sm:hidden text-xl font-extrabold">GS</span>
              <span className="hidden sm:inline text-xs text-emerald-100 font-normal">Eco-Friendly Hotels</span>
            </div>
          </Link>

          {/* Desktop Links - Hidden on Mobile & Tablet */}
          <div className="hidden lg:flex items-center space-x-2">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="relative px-4 py-2 rounded-lg text-white hover:text-emerald-100 transition-all duration-300 text-sm font-semibold group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300 rounded-lg"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-white transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Button - Hidden on Mobile & Tablet */}
          <div className="hidden lg:block">
            {user ? (
              <button
                onClick={handleLogout}
                className="group relative px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Logout</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            ) : (
              <Link
                to="/login"
                className="group relative px-8 py-3 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold inline-flex items-center space-x-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </Link>
            )}
          </div>

          {/* Mobile & Tablet Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-emerald-700/98 to-teal-700/98 backdrop-blur-xl shadow-2xl border-t border-white/10 animate-slideDown">
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 rounded-xl text-white hover:bg-white/20 active:bg-white/25 transition-all duration-300 font-semibold shadow-md hover:shadow-lg group"
              >
                <span>{link.name}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            
            {/* Mobile Auth Button */}
            <div className="pt-4 border-t border-white/20 mt-4">
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-5 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 active:scale-98 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  <span>Logout</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-5 py-4 bg-white text-emerald-600 rounded-xl hover:bg-emerald-50 active:scale-98 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;