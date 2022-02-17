import expresApp from './services/server';
import serverless from 'serverless-http';
import { handlerPath } from './utils/handlerResolver';
import { MongoAtlas } from './services/mongoDb';

const handler = serverless(expresApp);

module.exports.handler = async (event, context) => {
    await MongoAtlas.connect();
    const result = await handler(event, context);
    return result;
};

export const api = {
    handler: `${handlerPath(__dirname)}/index.handler`,
    events: [
        {
            httpApi: '*',
        },
    ],
};