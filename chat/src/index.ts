import express from "express";
import path from 'path';
import http from 'http';
import { initWsServer } from "./services/socket";

// basic config
const app = express();
const server = http.createServer(app);

// Define the paths to the static file
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// Init socketIo Server
initWsServer(server);

// Listening to port...
const PORT = 8080 || process.env.PORT;
server.listen(PORT, () => {
    console.log('Server up in localhost:' + PORT);
});