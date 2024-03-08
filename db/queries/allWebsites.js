const getAllWebsites = function (organization_id) {
  return db.query(`
  SELECT url, name, username, logo, stored_password as password, category_name as category
  FROM websites
  JOIN passwords ON websites.id = website_id
  JOIN categories ON categories.id = category_id
  JOIN organizations on organizations.id = organization_id
  WHERE organizations.id = $1
  `,[organization_id])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};


module.exports = { getAllWebsites };
