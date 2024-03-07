const express = require('express');
const router  = express.Router();


const db = require('../db/connection'); // Import  database library


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

module.exports = router;
