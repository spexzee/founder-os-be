/**
 * Health Routes
 * 
 * Defines routes for health check and status endpoints.
 */

const express = require('express');
const router = express.Router();
const healthController = require('../controllers/health.controller');

// Health check endpoint
router.get('/health', healthController.getHealth);

// API information endpoint
router.get('/info', healthController.getInfo);

module.exports = router;
