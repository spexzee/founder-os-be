/**
 * Routes Index
 * 
 * Central location for mounting all application routes.
 * Import all route modules and mount them to their respective paths.
 */

const express = require('express');
const router = express.Router();

// Import route modules
const healthRoutes = require('./health.routes');

// Mount routes
router.use('/api', healthRoutes);

// Default route
router.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Founder OS Backend API',
    docs: '/api/info'
  });
});

module.exports = router;
