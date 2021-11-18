import { Router } from "express";
import { productsController } from "src/controllers/products";
//import Config from '../config';

const router = Router();

router.get('/', productsController.getProducts)

router.post('/', (req, res) => {
    res.json({
        msg: 'POST products'
    })
})

router.put('/', (req, res) => {
    res.json({
        msg: 'PUT products'
    })
})

router.delete('/', (req, res) => {
    res.json({
        msg: 'DELETE products'
    })
})

export default router;