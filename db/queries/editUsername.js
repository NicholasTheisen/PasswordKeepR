const editUsername = function(username, websiteId) {
  return db.query(`
  UPDATE websites
  SET username = $1
  WHERE websites.id = $2
  `, [username, websiteId])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};



module.exports = editUsername;
