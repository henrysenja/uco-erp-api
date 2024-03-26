require('dotenv').config();
require('./aliases');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('@config/dbConn');
const app = express();
const PORT = process.env.PORT || 7000;
const mongoose = require('mongoose');
connectDB();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Our secret sauce middleware
const checkAuthKey = (req, res, next) => {
  const expectedAuthKey = process.env.ERP_AUTH_KEY; // The key from .env

  // Checking if the header exists and matches our secret sauce
  const headerAuthKey = req.headers['uco-erp-auth-key'];
  if (!headerAuthKey || headerAuthKey !== expectedAuthKey) {
    // Oops! Wrong ingredients, return 403 Forbidden
    return res.status(403).send('Forbidden! You shall not pass without the correct key!');
  }

  // Hurray! The secret recipe is correct, proceed to the next course
  next();
};

// Let's spread our middleware over the routes
app.use(checkAuthKey);


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to UCOllect IMS/eRP API');
});

app.use('/api', routes);

// Start server
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`UCOllect IMS/eRP API Server is running on http://localhost:${PORT}`);
  });
});
