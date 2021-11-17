import { Server } from "socket.io";
import http from 'http'
import { fromatMessages } from "../utils/messages";
import { Data, User } from "../models/interfaces";
import { addUser, getCurrentUser, removeUser, getRoomUsers } from '../utils/users';

let data: Data = {
    username: '',
    text: ''
};

export const initWsServer = (app: http.Server) => {
    const io = new Server(app);

    // Run when client connects 
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado')

        //Join room 
        socket.on('JoinRoom', (msg: User) => {
            addUser(socket.id, msg.username, msg.room);
            const user = getCurrentUser(socket.id);
            socket.join(user.room);

            // Wellcome current user
            data.username = 'CHATBOT-BOTI';
            data.text = 'Wellcome to the chat';
            socket.emit('message', fromatMessages(data));

            // Brodcaste when a user conects
            data.text = `${user.username} has joined the chat`;
            socket.broadcast.to(user.room).emit(
                'message',
                fromatMessages(data)
            );
            const roomInfo = {
                room: user.room,
                users: getRoomUsers(user.room)
            };
            io.to(user.room).emit('roomUsers', roomInfo);
        })

        //Listen for chat message
        socket.on('chatMessage', (msg) => {
            const user = getCurrentUser(socket.id);
            data.username = user.username;
            data.text = msg;
            io.to(user.room).emit('message', fromatMessages(data));
        })


        // Runs when a client disconnects
        data.text = 'Has left de chat';
        socket.on('disconnect', () => {
            const user = getCurrentUser(socket.id);
            if (user) {
                removeUser(socket.id);
                data.username = 'CHATBOT-BOTI';
                data.text = `${user.username} has left the chat`;
                io.to(user.room).emit('message', fromatMessages(data));

                const roomInfo = {
                    room: user.room,
                    users: getRoomUsers(user.room)
                };
                io.to(user.room).emit('roomUsers', roomInfo);
            };
        });
    })
}