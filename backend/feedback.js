const mongoose = require('mongoose');
const settings = require('./settings');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    feedback: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5'],
        validate: {
            validator: Number.isInteger,
            message: 'Rating must be a whole number'
        }
    }
}, { timestamps: { createdAt: true, updatedAt: false } });

module.exports = mongoose.model('Feedback', feedbackSchema, settings.mongodb.collection); 