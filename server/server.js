const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Allow CORS from your frontend explicitly
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // optional, if using cookies or auth headers
}));

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Your routes
const transactionRoutes = require('./routes/transactions');
app.use('/api/transactions', transactionRoutes);

// ✅ Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(console.error);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
