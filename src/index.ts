import express from 'express';
import socketio from 'socket.io';
import path from 'path';
import http from 'http';

const app = express();

const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

io.on('connection', (socket) =>{
    console.log(`nova conexao: ${socket.id}`);

    socket.on('mensage', message =>{
        console.log(`Noma mensagem: ${message}`);
        socket.emit('recebido', `recebido a mensgem ${message}`)

    });
})

httpServer.listen(3333);