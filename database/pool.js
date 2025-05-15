const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool ({
    connectionString: process.env.NODE_ENV === 'development'
        ? process.env.DATABASE_URL_LOCAL 
        : process.env.DATABASE_URL_PROD,
    ssl: process.env.NODE_ENV === 'development' 
        ? false : {rejectUnauthorized: false}
})

module.exports = pool;