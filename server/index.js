const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('hey bro');
});

// database connection
mongoose.connect(process.env.mongoDB_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Database connection error:', error.message);
});

db.once('open', () => {
  console.log('Database connected!');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

//router

const expenseRouter = require('./routers/expense');

app.use('/api/v1', expenseRouter)
