const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to BookNest Backend!');
});

// Example POST route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form Data Received:', name, email, message);
  res.send('Thank you for contacting BookNest!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});