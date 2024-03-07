const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

const allWebsitesQuery = require('../db/queries/allWebsites');

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

async function retrieveAllWebsites() {
  try {
    // Call the allWebsites query to retrieve all websites from the database
    const allWebsites = await allWebsitesQuery(); // Assuming allWebsitesQuery is an async function
    res.render('vault', { allWebsites }); // Pass the retrieved websites to the vault.ejs template for rendering
  } catch (error) {
    console.error('Error retrieving all websites:', error);
    res.status(500).json({ error: 'An error occurred while retrieving all websites' });
  }
};
module.exports = router;
