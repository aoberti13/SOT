import { Router } from "express";
import { wsServer } from "../services/service";

const router = Router();

router.use('/suma', (req, res) => {
    res.json({msg: 'done'});

    const data = {
        msg: 'Termine la suma',
        date: new Date(),
    }

    wsServer.emit('all', data);
});

export default router;