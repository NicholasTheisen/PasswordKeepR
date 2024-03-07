const express = require('express');
const router = express.Router();

// Handle GET request for /users route
router.get('/', async (req, res) => {
  try {
    // Add any necessary logic here to retrieve user data from the database or any other source
    const users = []; // Replace with actual user data
    res.render('users', { users }); // Render the EJS file named 'users' located in the 'views' directory, passing the users data
  } catch (error) {
    console.error('Error rendering users page:', error);
    res.status(500).json({ error: 'An error occurred while rendering users page' });
  }
});

module.exports = router;
