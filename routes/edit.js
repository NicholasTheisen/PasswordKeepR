const express = require('express');
const router  = express.Router();
const { editURL } = require('../db/queries/editURL'); // Import the editURL query
const { editPassword } = require('../db/queries/edPassword'); // Import the editPassword query
const { editUsername } = require('../db/queries/editUsername'); // Import the editUsername query
const db = require('../db/connection'); // Import  database library
const generatePassword = require('../helpers/generatePassword'); // Import the generatePassword helper function


// Function to get website data by ID
const getWebsiteById = async (websiteId) => {
  try {
    const result = await db.query('SELECT * FROM websites WHERE id = $1', [websiteId]);
    return result.rows[0]; // Assuming 'id' is unique and returns only one row
  } catch (err) {
    console.error('Error fetching website data:', err);
    throw err;
  }
};

// Handle GET request for /edit route
router.get('/edit', async (req, res) => {
  console.log('Edit route accessed');
  try {

    const websiteId = parseInt(req.query.websiteId, 10);
    console.log("Received websiteId:", websiteId);
    if (isNaN(websiteId)) {
      return res.status(400).send('Invalid website ID');
    }

    const websiteData = await getWebsiteById(websiteId);
    if (!websiteData) {
      return res.status(404).send('Website not found');
    }

    res.render('edit', { websiteData });
  } catch (error) {
    console.error('Error occurred while rendering edit page:', error);
    res.status(500).send('Error occurred while rendering edit page');
  }
});

router.post('/edit/url', async (req, res) => {
  try {
      const { url, websiteId } = req.body;
      await editURL(url, websiteId);
      res.redirect('/vault');
  } catch (error) {
      console.error('Error updating URL:', error);
      res.status(500).send('Error occurred while updating the URL');
  }
});

// Handle POST request for editing the username
router.post('/edit/username', async (req, res) => {
  console.log('*****',req.body);
  try {

      const { username } = req.body;
      await editUsername(username, websiteId);
      res.redirect('/vault');
  } catch (error) {
      console.error('Error updating username:', error);
      res.status(500).send('Error occurred while updating the username');
  }
});

// Handle POST request for editing the password
router.post('/edit/password', async (req, res) => {
  try {
      const { password, websiteId } = req.body;
      await editPassword(password, websiteId);
      res.redirect('/vault');
  } catch (error) {
      console.error('Error updating password:', error);
      res.status(500).send('Error occurred while updating the password');
  }
});

module.exports = router;
