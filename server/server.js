const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./api.js');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.use('/api', apiRoutes);

app.get("/login", (req, res) => {
  res.redirect('/');
});

app.get("/welcome", (req, res) => {
  res.redirect('/');
});

app.get("/signup", (req, res) => {
  res.redirect('/');
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = app;