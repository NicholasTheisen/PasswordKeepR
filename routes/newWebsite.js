const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addNewWebsite } = require('../db/queries/addNewWebsite'); // Import the addNewWebsite query
const generatePassword = require('../helpers/generatePassword'); // Import the generatePassword helper function

// Handle GET request for /newWebsite route
router.get('/', async (req, res) => {
  try {
    // Render the EJS file named 'newWebsite' located in the 'views' directory
    res.render('newWebsite');
  } catch (error) {
    console.error('Error rendering newWebsite page:', error);
    res.status(500).json({ error: 'An error occurred while rendering newWebsite page' });
  }
});

// Handle POST request for /newWebsite route
router.post('/', async (req, res) => {
  try {
    // Get the website data from the request
    const websiteData = req.body;

    // Call the generatePassword helper function
    const password = generatePassword(websiteData);

    // Call the addNewWebsite helper function
    const result = await addNewWebsite({ ...websiteData, password });

    // Handle the result and send the response
    res.json({ message: 'Website added successfully' });
  } catch (error) {
    // Handle any errors that occur during the website addition process
    console.error('Error adding website:', error);
    res.status(500).json({ error: 'An error occurred while adding the website' });
  }
});

module.exports = router;
