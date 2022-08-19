const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config({path: '.env'})
const client = redis.createClient({
    socket: {
        host: 'process.env.BD_HOST',
        port: process.env.BD_PORT
    },
});

client.on('error', (err: string) => {
    console.log('Error ' + err);
});