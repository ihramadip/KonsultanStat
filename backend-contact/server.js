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
});

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

// API route POST
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📩 Pesan masuk:', req.body); // Tambahkan ini!
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: 'Pesan berhasil disimpan!' });
  } catch (err) {
    console.error('❌ Gagal menyimpan:', err);
    res.status(500).json({ error: 'Gagal menyimpan pesan' });
  }
});

// API route GET (untuk melihat semua pesan)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data pesan' });
  }
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});