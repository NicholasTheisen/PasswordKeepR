// dbHelpers.js

const db = require('../db/connection');

// Function to fetch vault information for a specific user
async function getVaultInformation(userId) {
  try {
    const query = 'SELECT * FROM vault WHERE user_id = $1';
    const vaultData = await db.query(query, [userId]);
    return vaultData.rows;
  } catch (error) {
    throw new Error('Error fetching vault information');
  }
}

// Function to insert a new entry into the vault
async function addVaultEntry(userId, entryData) {
  try {
    const query = 'INSERT INTO vault (user_id, entry_data) VALUES ($1, $2) RETURNING *';
    const newEntry = await db.query(query, [userId, entryData]);
    return newEntry.rows[0];
  } catch (error) {
    throw new Error('Error adding vault entry');
  }
}

// Export the helper functions for use in routes
module.exports = {
  getVaultInformation,
  addVaultEntry,
  // Add more helper functions as needed
};
