import {Router, Request, Response} from 'express';
const router = Router();

router.get('/heroes', (req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensagem: 'Tudo está bem!'
    });
});

export default router;