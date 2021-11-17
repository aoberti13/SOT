import config from "src/common/config";
import * as mongoose from 'mongoose';

export class MongoDb {
    private uri: string;
    private connection?: mongoose.Mongoose;

    constructor() {
        this.uri = config.MONGO_SRV;
    }

    async connect() {
        if (!this.connection) {
            console.log('Conectandose por primera vez');
            this.connection = await mongoose.connect(this.uri);
        } else {
            console.log('Ya estas conectado rey');
        }
        return this.connection;
    }
}

export const MongoAtlas = new MongoDb();
