/* user can add a new username and password for a specific website */

const addNewWebsite = function() {
  return db.query(`
  INSERT INTO passwords (stored_password) VALUES ($1)
  INSERT INTO websites (url, organization_id, category_id) VALUES ($2, $3, $4)
  `, [/* password, url */])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};
