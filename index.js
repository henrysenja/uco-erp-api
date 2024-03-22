require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 7000;
require('./aliases');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to UCOllect IMS/eRP API');
});

app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`UCOllect IMS/eRP API Server is running on http://localhost:${PORT}`);
});