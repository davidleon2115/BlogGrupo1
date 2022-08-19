const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config({path: '.env'})
const client = redis.createClient({
    socket: {
        host: 'process.env.BD_HOST',
        port: process.env.BD_PORT
    },
});

export default client;