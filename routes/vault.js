const express = require('express');
const router  = express.Router();

app.set ('view engine', 'ejs');

const db = require('your-database-library'); // Import the database
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

    // Fetch the list of websites and associated passwords from the database
    const websites = await db.query('SELECT * FROM websites WHERE userId = ?', [user.id]);
    const passwords = await db.query('SELECT * FROM passwords WHERE userId = ?', [user.id]);

    res.render('vault', { user, organization, websites, passwords });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send('Error fetching vault information');
  }
});
