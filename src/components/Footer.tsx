import React from 'react';
import { BarChart3, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">DataPro Consulting</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Solusi profesional untuk analisis data dan statistik bisnis yang menghasilkan insight actionable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Analisis Statistik</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Visualisasi Data</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Data Cleaning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Konsultasi Penelitian</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Business Intelligence</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Beranda</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Layanan</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300">Portofolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">Tentang</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-400 text-sm">ihrama13@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-400 text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 mt-1" />
                <span className="text-gray-400 text-sm">Jl. Sudirman No. 123<br />Jakarta Selatan 12190</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DataPro Consulting. All rights reserved. | 
            <a href="#" className="hover:text-white transition duration-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition duration-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;