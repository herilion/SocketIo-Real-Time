import express from "express";
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express();
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    },
    methods: ['POST', 'GET']

})

io.on('connect', function (socket) {
    console.log('user is connect')
})

server.listen(8000, function () {
    console.log('server is running au 8000');
})