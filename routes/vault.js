const express = require('express');
const router  = express.Router();


//const db = require('midterm'); // Import the database
router.get('/', async (req, res) => {
  try {
    // Hardcoded user and organization
    const user = {
      id: 1,
      name: 'Norman Osborne',
      organizationId: 1 // Assuming the organization ID for the hardcoded user
    };
    const organization = {
      id: 1,
      name: 'Oscorp'
    };

    try {
      // Render the EJS file named 'vault' located in the 'views' directory
      res.render('vault');
    } catch (error) {
      console.error('Error rendering vault page:', error);
      res.status(500).json({ error: 'An error occurred while rendering vault page' });
    }
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send('Error fetching vault information');
  }
});

module.exports = router;
