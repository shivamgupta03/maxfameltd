require('dotenv').config();

module.exports = {
    mongodb: {
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        database: process.env.MONGODB_DATABASE,
        collection: process.env.MONGODB_COLLECTION
    },
    server: {
        port: process.env.PORT
    }
}; 