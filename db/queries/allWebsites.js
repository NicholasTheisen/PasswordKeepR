const db = require('../connection');

const getAllWebsites = function (organization_id) {
  return db.query(`
  SELECT websites.url, websites.name, websites.username, websites.logo, passwords.stored_password AS password, categories.category_name AS category
  FROM websites
  JOIN passwords ON websites.id = passwords.website_id
  JOIN categories ON websites.category_id = categories.id
  WHERE websites.organization_id = $1;
  `, [organization_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.error('Error in getAllWebsites:', err);
      throw err; // Re-throw the error to be caught by the calling function
    });
};



module.exports = { getAllWebsites };
