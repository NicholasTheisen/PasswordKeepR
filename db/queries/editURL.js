const editURL = function(url, websiteId) {
  return db.query(`
  UPDATE websites
  SET url = $1
  WHERE website_id = $2
  `, [url, websiteId])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};



module.exports = { editURL };
