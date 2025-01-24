// Create web server
// Create a new express server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

// Use the static files in the public folder
app.use(express.static('public'));

// Use the body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the route for the comments
app.use('/comments', require('./routes/comments'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});