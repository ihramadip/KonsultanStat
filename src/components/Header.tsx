import React, { useState } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-800 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Ihram Adi Pratama</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition duration-300">Beranda</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 transition duration-300">Layanan</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-800 transition duration-300">Portofolio</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition duration-300">Tentang</a>
            <a href="#contact" className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300">Kontak</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition duration-300" onClick={toggleMenu}>Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition duration-300" onClick={toggleMenu}>Layanan</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-800 transition duration-300" onClick={toggleMenu}>Portofolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition duration-300" onClick={toggleMenu}>Tentang</a>
              <a href="#contact" className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300 text-center" onClick={toggleMenu}>Kontak</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;