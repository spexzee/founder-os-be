/**
 * Global Error Handler Middleware
 * 
 * Catches all errors thrown in the application and sends appropriate response.
 * Should be the last middleware mounted in the application.
 */

const errorHandler = (err, req, res, next) => {
  // Log error details for debugging
  console.error('Error occurred:', err.message);
  console.error(err.stack);
  
  // Determine status code
  const statusCode = err.statusCode || 500;
  
  // Send error response
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Include stack trace only in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
