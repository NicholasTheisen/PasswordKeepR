const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


const allWebsitesQuery = require('../db/queries/allWebsites');

router.get('/', async (req, res) => {

  try {
    // Find the user who has username 'MikeLowry89'
    const username = 'MikeLowry89';

    const userQuery = 'SELECT * FROM users WHERE user_name = $1';
    try {
      const userResult = await db.query(userQuery, [username]);
      const user = userResult.rows[0];
      if (!user) {
        return res.status(404).send('User not found');
      }

      // Find the organization with the user's organization_id
      const organizationQuery = 'SELECT * FROM organizations WHERE id = $1';
      const organizationResult = await db.query(organizationQuery, [user.organization_id]);
      const organization = organizationResult.rows[0];
      if (!organization) {
        return res.status(404).send('Organization not found');
      }

      const result = await db.query('SELECT id, url, name, username, logo, organization_id, category_id FROM websites');
      const websites = result.rows;


      const passwordQuery = 'SELECT * FROM passwords'; // Define the password query
      const passwordResult = await db.query(passwordQuery); // Execute the query
      const passwords = passwordResult.rows;


      res.render('vault', { user, organization, websites, passwords});
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Error processing request');
    }
  } catch (error) {
    console.error('General Error:', error);
    res.status(500).send('Error fetching data');
  }
});

async function retrieveAllWebsites(organization_id) {
  try {
    // Call the allWebsites query to retrieve all websites from the database
    const allWebsites = await allWebsitesQuery.getAllWebsites(organization_id); // Assuming allWebsitesQuery is an async function
    return allWebsites; // Return the retrieved websites
  } catch (error) {
    console.error('Error retrieving all websites:', error);
    throw new Error('Failed to retrieve websites');
  }
}



module.exports = router;
