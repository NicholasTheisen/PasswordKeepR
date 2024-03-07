const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

const templateVars = {
  user: null
};

// Index page
router.get ('/', (req, res) => {
  res.render('index', templateVars);
});
// Login page which redircets to the vault
router.get ('/login', (req, res) => {
  res.redirect('/vault');
});

module.exports = router;

