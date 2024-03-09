const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addNewWebsite } = require('../db/queries/addNewWebsite'); // Import the addNewWebsite query
const generatePassword = require('../helpers/generatePassword'); // Import the generatePassword helper function


// const bodyParser = require('body-parser');


// // Assuming you are still using EJS
// router.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form
router.get('/', (req, res) => {
    res.render('newWebsite');
});



// Route to handle the form submission
router.post('/newWebsite', (req, res) => {
  console.log("HERE");
    const { url, username, password, category } = req.body;
    addNewWebsite(url, username, password, category);

    res.redirect('/vault');
});

module.exports = router;
