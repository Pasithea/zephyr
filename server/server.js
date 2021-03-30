const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/index.html"));
});


app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = app;