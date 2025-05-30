const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoutes = require('./urls');
const settings = require('./settings');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = `mongodb://${settings.mongodb.host}:${settings.mongodb.port}/${settings.mongodb.database}`;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', feedbackRoutes);

app.listen(settings.server.port, () => {
    console.log(`Server is running on port ${settings.server.port}`);
}); 