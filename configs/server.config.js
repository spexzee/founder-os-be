/**
 * Server Configuration
 * 
 * This file contains all server-related configuration settings.
 * Configuration values are loaded from environment variables.
 */

module.exports = {
  // Server port - defaults to 3000 if not specified
  port: process.env.PORT || 3000,
  
  // Environment - development, production, or test
  env: process.env.NODE_ENV || 'development',
  
  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
  }
};
