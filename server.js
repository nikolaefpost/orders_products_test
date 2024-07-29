const express = require('express');
const cors = require('cors');
const { orders, products } = require('./data.module');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
