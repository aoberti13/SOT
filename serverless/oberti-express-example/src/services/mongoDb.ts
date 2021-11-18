import config from "src/config";
import mongoose from 'mongoose';
import { ProductI, productSchema } from "src/models/products";

class MongoDB {
    private uri: string;
    private connection: mongoose.Connection;
    private productModel: mongoose.Model<ProductI>;

    constructor() {
        this.uri = config.MONGO_SRV;
    };

    async connect() {
        if (!this.connection) {
            console.log('Connection es nulo. lo inicializamos');
            this.connection = await mongoose.createConnection(this.uri, {
                serverSelectionTimeoutMS: 5000,
            });

        } else {
            console.log('Conection ya esta inicializada');
        };
        return this.connection
    }

    getProductModel() {
        this.productModel = this.connection.model<ProductI>(
            'product',
            productSchema
        );
        return this.productModel;
    }
}

export const MongoAtlas = new MongoDB();