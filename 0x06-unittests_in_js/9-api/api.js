const express = require('express');

const HOST = '127.0.0.1';
const PORT = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]*)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is live at ${HOST}:${PORT}`);
});

module.exports = app;
