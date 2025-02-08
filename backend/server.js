const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routes/products');  // Update with the correct path if necessary

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/stoicverse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/products', productsRouter);

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
