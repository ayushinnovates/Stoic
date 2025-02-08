// backend/controllers/productsController.js

exports.getProducts = (req, res) => {
  // Dummy data to simulate products
  const products = [
    { id: 1, name: 'Stoic Womens Apsara Guipure Lace Dress', price: '$1,200' },
    { id: 2, name: 'Stoic Old Money Sweater', price: '$900' },
    { id: 3, name: 'Stoic Perennial Mens Bracelet', price: '$36,750' },
  ];
  res.json(products);
};
