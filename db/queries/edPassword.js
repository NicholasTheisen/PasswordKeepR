const editPassword = function(password, websiteId) {
  return db.query(`
  UPDATE passwords
  SET stored_password = $1
  WHERE website_id = $2
  `, [password, websiteId])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};




module.exports = { editPassword };
