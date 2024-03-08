const editCategory = function(category, websiteId) {
  return db.query(`
  UPDATE websites
  SET category_id = $1
  WHERE websites.id = $2
  `, [category, websiteId])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};



module.exports = editCategory;
