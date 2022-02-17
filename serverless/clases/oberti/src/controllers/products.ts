// import { MongoAtlas } from "src/services/mongoDb";
// import mongoose from 'mongoose';
// import { ProductI } from "src/models/products";
// import { Request, Response } from "express";

// class Products {
//     products: mongoose.Model<ProductI>

//     constructor() {
//         this.products = MongoAtlas.getProductModel();
//     }

//     async getProducts(req: Request, res: Response) {
//         const data = await this.products.find();
//         res.json({ data })
//     }
// }

// export const productsController = new Products();

import { MongoAtlas } from 'src/services/mongoDb';
import mongoose from 'mongoose';
import { ProductI } from '../models/products';
import { Request, Response } from 'express';

const getProducts = async (req: Request, res: Response) => {
    const products: mongoose.Model<ProductI> = MongoAtlas.getProductModel();

    const data = await products.find();

    res.json({
        products: data,
    });
};

const addProducts = async (req: Request, res: Response) => {
    const body = JSON.parse(req.body);
    const products: mongoose.Model<ProductI> = MongoAtlas.addProducts();

    await products.create(body);
    res.json({
        msg: 'Producto creado',
        product: body
    });
};

export const productsController = {
    getProducts,
    addProducts
};