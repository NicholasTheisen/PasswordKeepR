const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

app.set ('view engine', 'ejs');

const cookieSession = require('cookie-session');
router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));
// Index page
router.get ('/', (req, res) => {
  res.render('index', templateVars);
});
// Login page which redircets to the vault
router.get ('/login', (req, res) => {
  res.redirect('/vault');
});

module.exports = router;

