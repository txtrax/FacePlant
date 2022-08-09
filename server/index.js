require('dotenv').config();
const express = require('express');
const path = require('path');
// const controllers = require('./controllers/index.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//ROUTES

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}!`);
});