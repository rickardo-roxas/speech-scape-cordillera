import { errorResponse } from '../utils/ResponseHandler.util.js';

// This middleware handles errors for the whole server.
function errorHandler(err, _req, res, _next) {
    console.error(`[ERROR] ${err.name || 'Error'}: ${err.message}`);
    console.error(err.stack);

    const status = err.statusCode || 500;

    return errorResponse(res, {
        message: err.message,
        status: status,
    });
}

export default errorHandler;