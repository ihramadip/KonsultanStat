import React from 'react';
import { TrendingUp, Target, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Solusi Statistik & Data untuk 
            <span className="text-yellow-400 block mt-2">Keputusan Bisnis yang Lebih Cerdas</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Kami membantu bisnis memahami data melalui analisis statistik, visualisasi, dan konsultasi berbasis insight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Jadwalkan Konsultasi Gratis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
              Lihat Layanan Kami
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">95%</h3>
                <p className="text-blue-100">Akurasi Prediksi</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">20+</h3>
                <p className="text-blue-100">Proyek Selesai</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-blue-100">Klien Puas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;