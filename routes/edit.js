const express = require('express');
const router  = express.Router();

const db = require('../db/connection'); // Import  database library

// Display the edit form for a specific website
router.get('/:websiteId', async (req, res) => {
  try {
    const websiteId = req.params.websiteId;
    const website = await db.query('SELECT * FROM websites WHERE id = ?', [websiteId]);

    res.render('edit', { website });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching website information for editing');
  }
});

// Handle the form submission to update website information
router.post('/:websiteId', async (req, res) => {
  try {
    const websiteId = req.params.websiteId;
    const { email, password, url } = req.body;

    await db.query('UPDATE websites SET email = ?, password = ?, url = ? WHERE id = ?', [email, password, url, websiteId]);

    res.redirect('/vaults');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating website information');
  }
});

module.exports = router;
