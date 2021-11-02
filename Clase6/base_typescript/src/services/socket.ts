import { Server } from 'socket.io';
import http from 'http';

export const initWServer = (app: http.Server) => {
    const myWsServer = new Server(app);

    myWsServer.on('connection', (socket) => {
        console.log('cliente conectado');

    })
    return myWsServer;
}
