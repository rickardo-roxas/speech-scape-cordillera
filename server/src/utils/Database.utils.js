import connection from '../configs/Database.config.js';

/**
 * Perform a database query.
 * @param {string} query - SQL query string with placeholders.
 * @param {Array} params - Array of parameters to replace placeholders.
 * @returns {Promise} - Resolves with query results or rejects with error.
 */
function performQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, results) => {
        if (err) {
            return reject(err);
        }
        resolve(results);
        });
    });
}

/**
 * Perform an update operation in the database.
 * @param {string} query - SQL query string with placeholders.
 * @param {Array} params - Array of parameters to replace placeholders.
 * @returns {Promise} - Resolves with true if successful or rejects with error.
 */
function performUpdate(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, _results) => {
            if (err) {
                return reject(err);
            }
            resolve(true);
        });
    });
}

/**
 * Retrieves all records from a specified table.
 * @param {string} tableName  - Name of the table to query.
 * @returns  {Promise} - Resolves with the results of the query or rejects with error.
 */
function getAll(tableName) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tableName}`, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    performQuery,
    performUpdate,
    getAll,
};
