// Import modules
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
  const appInfo = {
    version: '3.0',
    message: 'This is the third version of Node App',
    time: new Date().toLocaleTimeString()
  };

  res.render('index', { appInfo });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 App running at http://localhost:${port}`);
});
