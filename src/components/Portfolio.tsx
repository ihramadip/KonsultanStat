import React from 'react';
import { ExternalLink, Calendar, Users, TrendingUp, Target, BarChart3 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Analisis Penjualan E-commerce",
      category: "Retail Analytics",
      description: "Analisis mendalam terhadap data penjualan untuk mengidentifikasi tren musiman dan perilaku konsumen.",
      metrics: ["↑ 35% ROI", "↑ 28% Conversion", "↓ 15% Churn"],
      icon: TrendingUp,
      color: "bg-blue-500"
    },
    {
      title: "Prediksi Demand Inventory",
      category: "Supply Chain",
      description: "Model prediktif untuk optimasi inventory dan mengurangi waste dalam supply chain.",
      metrics: ["↓ 22% Inventory Cost", "↑ 40% Efficiency", "↓ 18% Waste"],
      icon: Target,
      color: "bg-green-500"
    },
    {
      title: "Customer Segmentation",
      category: "Marketing Analytics",
      description: "Segmentasi pelanggan berdasarkan perilaku dan preferensi untuk targeting yang lebih efektif.",
      metrics: ["↑ 45% Engagement", "↑ 32% Retention", "↑ 25% Revenue"],
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "Risk Assessment Model",
      category: "Financial Analytics",
      description: "Model penilaian risiko kredit menggunakan machine learning untuk institusi keuangan.",
      metrics: ["↑ 60% Accuracy", "↓ 30% Default Rate", "↑ 20% Approval"],
      icon: BarChart3,
      color: "bg-red-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portofolio Proyek</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hasil nyata dari kolaborasi dengan berbagai klien dalam mengoptimalkan keputusan bisnis berbasis data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition duration-300 group">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${project.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-sm font-semibold text-gray-900">{metric}</p>
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center text-blue-800 hover:text-blue-900 font-semibold group-hover:translate-x-2 transition duration-300">
                    Lihat Detail
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Siap Memulai Proyek Anda?</h3>
            <p className="text-xl text-blue-100 mb-8">Diskusikan kebutuhan analisis data Anda dengan tim ahli kami</p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Mulai Konsultasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
