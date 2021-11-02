import express from 'express';
import path from 'path';
import http from 'http';
import mainRouter from '../routes';
import { initWServer } from './socket';

const app = express();
app.use(express.json());

const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));

app.use('/api', mainRouter);

export const httpServer = http.createServer(app);

export const wsServer = initWServer(httpServer);