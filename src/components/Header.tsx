import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Tại sao chọn chúng tôi', href: '#why-us' },
    { name: 'Quy trình', href: '#process' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-primary py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary' : 'bg-white'}`}>
            <span className={`font-black text-xl leading-none ${isScrolled ? 'text-white' : 'text-primary'}`}>
              NL
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-lg md:text-xl leading-none tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
              NHẬT LÂM AC
            </span>
            <span className={`text-[9px] uppercase tracking-[0.2em] font-black ${isScrolled ? 'text-accent' : 'text-highlight'}`}>
              MÁY LẠNH NỘI ĐỊA NHẬT
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-xs font-extrabold uppercase tracking-wider transition-colors hover:text-highlight ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-3">
            <a 
              href="tel:0900000000" 
              className="flex items-center space-x-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-black hover:bg-blue-700 transition-all shadow-lg"
            >
              <Phone size={16} fill="currentColor" />
              <span>0900.000.000</span>
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-primary font-medium py-2 border-b border-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a 
                  href="tel:0900000000" 
                  className="flex items-center justify-center space-x-2 bg-accent text-white py-3 rounded-xl font-bold"
                >
                  <Phone size={18} />
                  <span>Gọi ngay</span>
                </a>
                <a 
                  href="https://zalo.me/0900000000" 
                  className="flex items-center justify-center space-x-2 bg-emerald-500 text-white py-3 rounded-xl font-bold"
                >
                  <MessageCircle size={18} />
                  <span>Zalo</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
