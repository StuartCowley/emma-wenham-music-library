const express = require('express');

const app = express();

const APP_PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Hello World');
});


module.exports = app;
