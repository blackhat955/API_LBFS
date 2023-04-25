// app.js
const express = require('express');
const mongoose = require('mongoose');
const fileRouter = require('./router/uploadRouter');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://Durgesh:Durgesh123@cluster0.x708zzd.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.use(express.json());
app.use('/files', fileRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));





