// services/db.js
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT,
    database: process.env.DB_NAME
});

global.db = connection.promise()