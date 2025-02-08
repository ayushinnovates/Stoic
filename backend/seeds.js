const mongoose = require('mongoose');
const Product = require('./models/Product');

// Dummy Data
const dummyProducts = [
  { name: 'Stoic Womens Apsara Guipure Lace Dress', price: 1200, cryptoPrice: '700 XRP', image: '/item1.png', growth: '+15%' },
  { name: 'Stoic Old Money Sweater', price: 900, cryptoPrice: '520 XRP', image: '/item2.png', growth: '+12%' },
  { name: 'Stoic Perennial Mens Bracelet', price: 36750, cryptoPrice: '15347 XRP', image: '/item3.png', growth: '+10%' },
  { name: 'Stoic Selene Etoil', price: 41500, cryptoPrice: '17329 XRP', image: '/item4.png', growth: '+20%' },
];

mongoose.connect('mongodb://localhost:27017/stoicverse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await Product.insertMany(dummyProducts);
  console.log('Dummy products added!');
  mongoose.disconnect();
}).catch((err) => console.log(err));
