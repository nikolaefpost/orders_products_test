const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const orders = [
    {
        id: 1,
        title: 'Order 1',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() { return products; }
    },
    {
        id: 2,
        title: 'Order 2',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() { return products; }
    },
    {
        id: 3,
        title: 'Order 3',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        get products() { return products; }
    }
];

const products = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
    },
    {
        id: 2,
        serialNumber: 1234,
        isNew: 1,
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 }
        ],
        order: 2,
        date: '2017-06-29 12:09:33'
    }
];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
