import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    consultationDate: ''
  });

  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // State untuk form jadwal konsultasi modal
  const [scheduleData, setScheduleData] = useState({
    name: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (showScheduleModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showScheduleModal]);

  const openScheduleModal = () => setShowScheduleModal(true);
  const closeScheduleModal = () => setShowScheduleModal(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('✅ Terima kasih! Pesan Anda telah terkirim.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          consultationDate: ''
        });
      } else {
        alert('❌ Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('❌ Error saat mengirim:', error);
      alert('❌ Terjadi kesalahan saat mengirim. Silakan coba lagi.');
    }
  };

  // Handle perubahan input di modal jadwal konsultasi
  const handleScheduleChange = (e) => {
    setScheduleData({
      ...scheduleData,
      [e.target.name]: e.target.value
    });
  };

  // Submit jadwal konsultasi ke backend
  // Bagian handleScheduleSubmit
const handleScheduleSubmit = async (e) => {
  e.preventDefault();

  if (!scheduleData.name || !scheduleData.date || !scheduleData.time) {
    alert('❌ Mohon isi semua field jadwal konsultasi.');
    return;
  }

  try {
    console.log('Mengirim jadwal:', scheduleData); // Debug data dikirim
    const response = await fetch('http://localhost:5000/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scheduleData)
    });

    const result = await response.json(); // parsing response json

    if (response.ok) {
      alert('✅ Jadwal konsultasi berhasil dikirim!');
      setScheduleData({ name: '', date: '', time: '' });
      closeScheduleModal();
    } else {
      console.error('Response error:', result);
      alert('❌ Gagal mengirim jadwal: ' + (result.error || 'Silakan coba lagi.'));
    }
  } catch (error) {
    console.error('❌ Error saat mengirim jadwal:', error);
    alert('❌ Terjadi kesalahan saat mengirim jadwal. Silakan coba lagi.');
  }
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap memulai transformasi data untuk bisnis Anda? Mari diskusikan kebutuhan Anda dengan tim ahli kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-800 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">ihrama13@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-800 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-800 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 09:00 - 18:00</p>
                    <p className="text-gray-600">Sabtu: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-blue-800 rounded-lg p-6 text-white mt-8">
                <h4 className="text-xl font-bold mb-3">Konsultasi Gratis</h4>
                <p className="text-blue-100 mb-4">
                  Dapatkan konsultasi gratis 30 menit untuk membahas kebutuhan analisis data Anda.
                </p>
                <button
                  onClick={openScheduleModal}
                  className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Jadwalkan Sekarang
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Kirim Pesan</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="analisis-statistik">Analisis Statistik</option>
                    <option value="visualisasi-data">Visualisasi Data</option>
                    <option value="data-cleaning">Data Cleaning</option>
                    <option value="konsultasi-penelitian">Konsultasi Penelitian</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="predictive-modeling">Predictive Modeling</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="consultationDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Konsultasi Preferensi
                  </label>
                  <input
                    type="date"
                    id="consultationDate"
                    name="consultationDate"
                    value={formData.consultationDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan analisis data Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-900 transition duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Jadwal Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              onClick={closeScheduleModal}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Jadwalkan Konsultasi</h3>
            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label htmlFor="scheduleName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="scheduleName"
                  name="name"
                  value={scheduleData.name}
                  onChange={handleScheduleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Tanggal Konsultasi
                </label>
                <input
                  type="date"
                  id="scheduleDate"
                  name="date"
                  value={scheduleData.date}
                  onChange={handleScheduleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="scheduleTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Jam
                </label>
                <select
                  id="scheduleTime"
                  name="time"
                  value={scheduleData.time}
                  onChange={handleScheduleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih Jam</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
              >
                Kirim Jadwal
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;