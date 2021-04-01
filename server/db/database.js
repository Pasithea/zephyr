const { Pool } = require('pg');
require('dotenv').config();

const database = new Pool({
  connectionString: 'postgres://iqkzzrlm:hO21n4Abj5X2znLgP6OGvxL3oM5VVAG1@kashin.db.elephantsql.com:5432/iqkzzrlm'
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query...', text);
    return database.query(text, params, callback);
  },
};