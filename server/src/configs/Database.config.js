import mysql from 'mysql2';

import config from './Index.config.js';

// Creates a connection pool to the database 
const connection = mysql.createPool(config.DB_URL);

export default connection;