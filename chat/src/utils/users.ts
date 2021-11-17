import { User } from "../models/interfaces";

let users: any[] = [];

export const addUser = (id: string, username: string, room: string) => {
    const user: User = {
        id,
        username,
        room
    };
    users.push(user);
};

export const removeUser = (id: string) => {
    users = users.filter((aUser) => aUser.id !== id);
};

export const getCurrentUser = (id: string) => {
    return users.find((aUser) => aUser.id === id);
};

export const getRoomUsers = (room: string) => {
    return users.filter((aUser) => aUser.room === room);
};