const mongoose = require('mongoose');

const alertsSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ['compliance', 'payment', 'task'],
            required: [true, 'Alert type is required'],
        },
        dueDate: {
            type: Date,
            required: [true, 'Due date is required'],
        },
        status: {
            type: String,
            required: [true, 'Status is required'],
            trim: true,
        },
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization',
            required: [true, 'Organization ID is required'],
        },
    },
    {
        timestamps: true,
    }
);

const Alerts = mongoose.model('Alerts', alertsSchema);

module.exports = Alerts;
