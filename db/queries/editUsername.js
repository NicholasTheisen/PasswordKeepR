const db = require('../connection'); // Adjust this path as necessary

const editUsername = async (username, websiteId) => {
  try {

    const result = await db.query('UPDATE websites SET username = $1 WHERE id = $2', [username, websiteId]);
    console.log('Rows affected:', result.rowCount);
    return result.rowCount; // or another appropriate response
  } catch (err) {
    console.error('Error updating username:', err);
    throw err;
  }
};


module.exports = { editUsername };
