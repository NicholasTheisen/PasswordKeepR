// // PG database client/connection setup
// const { Pool } = require('pg');

// const dbParams = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// };

// const db = new Pool(dbParams);

// db.connect();

// module.exports = db;

// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'midterm',
  password: 'vagrant',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
