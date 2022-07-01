const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

const APP_PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/artist', artistRouter);

app.get('/', (req, res) => {
  res.status(200).json('Hello World');
});


module.exports = app;
