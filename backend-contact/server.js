const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Koneksi MongoDB
mongoose.connect('mongodb://localhost:27017/contactform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Model pesan
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  phone: String,
  service: String,
  message: String,
  consultationDate: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', MessageSchema);

// Model jadwal konsultasi
const ScheduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

// API route POST untuk pesan kontak
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📩 Pesan masuk:', req.body);
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: 'Pesan berhasil disimpan!' });
  } catch (err) {
    console.error('❌ Gagal menyimpan:', err);
    res.status(500).json({ error: 'Gagal menyimpan pesan' });
  }
});

// API route POST untuk jadwal konsultasi
app.post('/api/schedule', async (req, res) => {
  try {
    console.log('📅 Jadwal konsultasi masuk:', req.body);

    // Validasi sederhana backend (optional tapi disarankan)
    const { name, date, time } = req.body;
    if (!name || !date || !time) {
      return res.status(400).json({ error: 'Semua field jadwal harus diisi!' });
    }

    const newSchedule = new Schedule({ name, date, time });
    await newSchedule.save();
    res.status(201).json({ message: 'Jadwal berhasil disimpan!' });
  } catch (err) {
    console.error('❌ Gagal menyimpan jadwal:', err);
    res.status(500).json({ error: 'Gagal menyimpan jadwal' });
  }
});

// API route GET untuk lihat semua pesan
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data pesan' });
  }
});

// API route GET untuk lihat semua jadwal (opsional)
app.get('/api/schedules', async (req, res) => {
  try {
    const schedules = await Schedule.find().sort({ createdAt: -1 });
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data jadwal' });
  }
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
