const express = require('express');
const router  = express.Router();
const { editURL } = require('../db/queries/editURL'); // Import the editURL query
const { editPassword } = require('../db/queries/edPassword'); // Import the editPassword query
const db = require('../db/connection'); // Import  database library
const generatePassword = require('../helpers/generatePassword'); // Import the generatePassword helper function

// Handle GET request for /edit route
router.get('/', async (req, res) => {
  try {
    const currentEmail = "example@example.com";
    const currentPassword = "examplePassword";
    const currentUrl = "https://example.com";
    // Render the EJS file named 'edit' located in the 'views' directory, passing the currentEmail, currentPassword, and currentUrl variables
    res.render('edit', { currentEmail, currentPassword, currentUrl });
  } catch (error) {
    console.error('Error rendering edit page:', error);
    res.status(500).json({ error: 'An error occurred while rendering edit page' });
  }
});


// Handle POST request for /edit/url route
router.post('/url', async (req, res) => {
  try {
    // Get the URL data from the request
    const url = req.body.url;
    const websiteId = req.body.websiteId;

    // Call the editURL helper function
    const result = await editURL(url, websiteId);

    // Handle the result and send the response
    res.json({ message: 'URL edited successfully' });
  } catch (error) {
    // Handle any errors that occur during the URL editing process
    console.error('Error editing URL:', error);
    res.status(500).json({ error: 'An error occurred while editing the URL' });
  }
});

// Handle POST request for /edit/password route
router.post('/password', async (req, res) => {
  try {
    // Get the password data from the request
    const password = req.body.password;
    const websiteId = req.body.websiteId;

    // Call the generatePassword helper function
    const generatePassword = generatePassword(websiteData);

    // Call the editPassword helper function
    const result = await editPassword(password, websiteId);

    // Handle the result and send the response
    res.json({ message: 'Password edited successfully' });
  } catch (error) {
    // Handle any errors that occur during the password editing process
    console.error('Error editing password:', error);
    res.status(500).json({ error: 'An error occurred while editing the password' });
  }
});

module.exports = router;
