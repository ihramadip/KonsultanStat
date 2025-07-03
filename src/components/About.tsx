import React from 'react';
import fotosaya from '../assets/foto-saya.jpg' ;
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-2xl p-8 text-white">
                <img 
                  src={fotosaya}
                  alt="Ihram Adi Pratama"
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Ihram Adi Pratama</h3>
                  <p className="text-blue-100 mb-4">Senior Data Consultant & Statistician</p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">Bachelor Statistics</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">2+ Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Konsultan</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan pengalaman lebih dari 15 tahun di bidang statistik dan analisis data, 
                Ihram Adi Pratama telah membantu banyak perusahaan mengoptimalkan keputusan bisnis 
                melalui pendekatan data-driven yang solid dan metodologi statistik yang tepat.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pendidikan</h4>
                    <p className="text-sm text-gray-600">Universitas Islam Bandung</p>
                    <p className="text-sm text-gray-600">Bachelor Statistics, S.Stat</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sertifikasi</h4>
                    <p className="text-sm text-gray-600">Certified BNSP Data Analyst</p>
                    <p className="text-sm text-gray-600">Certified Data Scientist</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pengalaman</h4>
                    <p className="text-sm text-gray-600">50+ Proyek Selesai</p>
                    <p className="text-sm text-gray-600">Multi-Industry Experience</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Spesialisasi</h4>
                    <p className="text-sm text-gray-600">Predictive Analytics</p>
                    <p className="text-sm text-gray-600">Business Intelligence</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Keahlian Teknis</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'SPSS', 'SAS', 'Machine Learning', 'Deep Learning', 'Statistical Modeling'].map((skill, idx) => (
                    <span key={idx} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;