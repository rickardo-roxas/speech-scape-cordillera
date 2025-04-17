// This middleware handles errors for the whole server.
function errorHandler(err, _req, res, _next) {
    console.error(`[ERROR] ${err.name || 'Error'}: ${err.message}`);
    console.error(err.stack);

    const status = err.statusCode || 500;

    res.status(status).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
}

export default errorHandler;