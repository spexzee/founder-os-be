/**
 * Health Controller
 * 
 * Handles health check and status endpoints.
 * Used for monitoring and verifying the API is running.
 */

/**
 * Get API health status
 * @route GET /api/health
 */
const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
};

/**
 * Get API information
 * @route GET /api/info
 */
const getInfo = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Founder OS Backend API',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    }
  });
};

module.exports = {
  getHealth,
  getInfo
};
