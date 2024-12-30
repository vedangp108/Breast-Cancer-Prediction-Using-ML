import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './ui/Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface-50 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-surface-50'
              }`}>
                CuraPredict
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === '/'} scrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink to="/predict" active={location.pathname === '/predict'} scrolled={isScrolled}>
              Predictions
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} scrolled={isScrolled}>
              About
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'} scrolled={isScrolled}>
              Contact
            </NavLink>
            <Link to="/predict">
              <Button variant={isScrolled ? "primary" : "surface"}>
                Start Analysis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-surface-700' : 'text-surface-50'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6 bg-surface-50 rounded-lg shadow-xl"
          >
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/predict" onClick={() => setIsOpen(false)}>Predictions</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

const NavLink = ({ to, children, active, scrolled }) => (
  <Link
    to={to}
    className={`${
      active 
        ? 'text-primary-600' 
        : scrolled 
          ? 'text-surface-700 hover:text-primary-600' 
          : 'text-surface-50 hover:text-surface-200'
    } transition-colors`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block py-2 px-4 text-surface-700 hover:bg-surface-100 hover:text-primary-600"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;