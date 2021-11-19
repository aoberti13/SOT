import { Schema } from 'mongoose';

export interface ProductI {
    title: string;
    price: number;
};

export const productSchema = new Schema<ProductI>({
    title: { type: String, required: true },
    price: { type: Number, required: true },
});