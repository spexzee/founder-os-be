/**
 * Request Logger Middleware
 * 
 * Logs incoming HTTP requests with timestamp, method, and URL.
 * Useful for debugging and monitoring API usage.
 */

const requestLogger = (req, res, next) => {
  // Get current timestamp
  const timestamp = new Date().toISOString();
  
  // Log request details
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  
  // Continue to next middleware/route handler
  next();
};

module.exports = requestLogger;
