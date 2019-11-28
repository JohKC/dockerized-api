const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: 3306,
    database: 'db_artists',
    user: 'root',
    password: '1234'
});

module.exports = conn;