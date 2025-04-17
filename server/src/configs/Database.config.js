import mysql from 'mysql2';

import config from './Index.config.js';

// Creates a connection pool to the database 
const connection = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    "password": config.DB_PASSWORD,
    "database": config.DB_NAME,
    connectionLimit: 15,
    waitForConnections: true,
});

export default connection;