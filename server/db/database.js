const { Pool } = require('pg');
require('dotenv').config();

const database = new Pool({
  connectionString: process.env.DB_URL
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query...', text);
    return database.query(text, params, callback);
  },
};