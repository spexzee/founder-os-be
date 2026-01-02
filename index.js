/**
 * Main Application Entry Point
 * 
 * This file initializes and configures the Express application.
 * It sets up middleware, routes, error handlers, and starts the server.
 */

// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const cors = require('cors');

// Import configurations
const serverConfig = require('./configs/server.config');

// Import middlewares
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');

// Import routes
const routes = require('./routes');

// Initialize Express application
const app = express();

// ==================== Middleware Setup ====================

// Enable CORS for cross-origin requests
app.use(cors(serverConfig.cors));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Custom request logger middleware
app.use(requestLogger);

// ==================== Routes Setup ====================

// Mount all application routes
app.use('/', routes);

// ==================== Error Handling ====================

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler (must be last)
app.use(errorHandler);

// ==================== Server Startup ====================

// Start the server
const PORT = serverConfig.port;
app.listen(PORT, () => {
  console.log('=================================');
  console.log(`Server running in ${serverConfig.env} mode`);
  console.log(`Server listening on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
  console.log('=================================');
});

// Export app for testing purposes
module.exports = app;
