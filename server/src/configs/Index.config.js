import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

/**
 * Defines the environment variable
 * @param {string} key - Environment variable key.
 * @param {fallback} fallback - Error handler.
 * @returns Populated environment variable.
 */
function required(key, fallback = null) {
    const value = process.env[key] || fallback;
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}

const config = {
    // Client
    CORS_ORIGIN: required('CORS_ORIGIN'),

    // Server
    PORT: required('PORT'),
    NODE_ENV: required('NODE_ENV'),
    LOG_LEVEL: required('LOG_LEVEL'),

    // Database
    DB_HOST: required('MYSQL_HOST'),
    DB_USER: required('MYSQL_USER'),
    DB_PASSWORD: required('MYSQL_PASSWORD'),
    DB_PORT: required('MYSQL_PORT'),
    DB_URL: required('MYSQL_URL'),
};

export default config;