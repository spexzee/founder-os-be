const mongoose = require('mongoose');

const metricsSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization',
            required: [true, 'Organization ID is required'],
        },
        month: {
            type: Date,
            required: [true, 'Month is required'],
        },
        burn: {
            type: Number,
            required: [true, 'Burn is required'],
            default: 0,
        },
        revenue: {
            type: Number,
            required: [true, 'Revenue is required'],
            default: 0,
        },
        cashBalance: {
            type: Number,
            required: [true, 'Cash balance is required'],
            default: 0,
        },
        runway: {
            type: Number,
            required: [true, 'Runway is required'],
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Metrics = mongoose.model('Metrics', metricsSchema);

module.exports = Metrics;
