// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();
const db = require('./db/connection');
const path = require('path');
const vaultRouter = require('./routes/vault');
const editRouter = require('./routes/edit');


// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Serve static files from 'helpers' and 'routes' directories
app.use('/helpers', express.static(path.join(__dirname, 'helpers')));
app.use('/routes', express.static(path.join(__dirname, 'routes')));
app.use('/', editRouter);

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));



// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const indexRoutes = require('./routes/index');
const vaultRoutes = require('./routes/vault');
const editRoutes = require('./routes/edit');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/', indexRoutes);
app.use('/vault', vaultRoutes);
app.use('/edit', editRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
