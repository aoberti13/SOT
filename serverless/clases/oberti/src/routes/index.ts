import { Router } from 'express';
import ProductsRouter from './products';

const router = Router();

router.use('/products', ProductsRouter);

router.get('/hello', (req, res) => {
    res.json({
        msg: 'holaa mundo'
    })
})

export default router;