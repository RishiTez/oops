const express = require('express');
const mongoose = require('mongoose');
const bankRoutes = require('./routes/bankRouter');
const pocketRoutes = require('./routes/pocketRouter');

const app = express();

app.use(express.json());

app.use('/api/bank', bankRoutes);
app.use('/api/pocket', pocketRoutes);

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(4000, () => {
    console.log("Connected to DB and Listening on port 4000");
  })
}).catch((error) => {
  console.log(error);
})
