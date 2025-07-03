import React from 'react';
import { BarChart3, PieChart, Database, Search, Brain, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Analisis Statistik",
      description: "Analisis mendalam menggunakan metode statistik untuk mengungkap pola dan tren dalam data Anda.",
      features: ["Regression Analysis", "Hypothesis Testing", "ANOVA", "Time Series Analysis"]
    },
    {
      icon: PieChart,
      title: "Visualisasi Data",
      description: "Transformasi data kompleks menjadi visualisasi yang mudah dipahami dan actionable.",
      features: ["Interactive Dashboards", "Custom Charts", "Infographics", "Reporting Tools"]
    },
    {
      icon: Database,
      title: "Data Cleaning",
      description: "Pembersihan dan preprocessing data untuk memastikan kualitas analisis yang optimal.",
      features: ["Data Validation", "Missing Value Handling", "Outlier Detection", "Data Transformation"]
    },
    {
      icon: Search,
      title: "Konsultasi Penelitian",
      description: "Panduan metodologi penelitian dan desain eksperimen untuk hasil yang valid dan reliable.",
      features: ["Research Design", "Sampling Methods", "Survey Design", "Experimental Setup"]
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Solusi BI komprehensif untuk monitoring performa dan pengambilan keputusan strategis.",
      features: ["KPI Monitoring", "Predictive Analytics", "Market Analysis", "Performance Metrics"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Model prediktif untuk forecasting dan analisis risiko bisnis dengan akurasi tinggi.",
      features: ["Machine Learning", "Forecasting", "Risk Analysis", "Optimization Models"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi komprehensif untuk kebutuhan analisis data dan statistik bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 group">
                <div className="bg-blue-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;