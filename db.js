const mysql = require("mysql2/promise");

const database = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "movie-db",
    password: "root",
});

module.exports = database;