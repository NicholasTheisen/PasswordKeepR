/* user can add a new username and password for a specific website */

const addNewWebsite = function(password, url, username, category) {
  return db.query(`
  INSERT INTO passwords (stored_password) VALUES ($1)
  INSERT INTO websites (url, username, organization_id, category_id) VALUES ($2, $4, 1, $3)
  `, [password, url, category, username])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};



module.exports = { addNewWebsite };
