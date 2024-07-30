const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());

let { orders, products } = require('./data.module');



app.get('/orders', (req, res) => {
    res.json(orders);
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.put('/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id, 10);
    const orderIndex = orders.findIndex(order => order.id === orderId);

    if (orderIndex !== -1) {
        orders[orderIndex] = { ...orders[orderIndex], ...req.body };
        // saveDataToFile();
        res.json(orders[orderIndex]);
    } else {
        res.status(404).send('Order not found');
    }
});

app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...req.body };
        // saveDataToFile();
        res.json(products[productIndex]);
    } else {
        res.status(404).send('Product not found');
    }
});

app.delete('/orders/:orderId', (req, res) => {
    console.log('/orders/:orderId')
    const orderId = parseInt(req.params.orderId);
    const orderIndex = orders.findIndex(order => order.id === orderId);

    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        res.status(200).send({ message: 'Order deleted successfully' });
    } else {
        res.status(404).send({ message: 'Order not found' });
    }
});

app.delete('/orders/:orderId/products/:productId', (req, res) => {
    console.log('/orders/:orderId/products/:productId')
    const orderId = parseInt(req.params.orderId);
    const productId = parseInt(req.params.productId);
    console.log(orderId)
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        // saveDataToFile();
        res.sendStatus(204);
    } else {
        res.status(404).send('Product not found');
    }

    // const order = orders.find(order => order.id === orderId);
    // if (order) {
    //     const productIndex = order.products.findIndex(product => product.id === productId);
    //     if (productIndex !== -1) {
    //         products.splice(productIndex, 1);
    //         res.status(200).send({ message: 'Product deleted successfully' });
    //     } else {
    //         res.status(404).send({ message: 'Product not found in order' });
    //     }
    // } else {
    //     res.status(404).send({ message: 'Order not found' });
    // }
});

app.delete('/products/:productId', (req, res) => {
    console.log('/products/:productId')
    const productId = parseInt(req.params.productId, 10);
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        // saveDataToFile();
        res.sendStatus(204);
    } else {
        res.status(404).send('Product not found');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
