import {Router, Request, Response} from 'express';
import MySQL from '../mysql/mysql';
const router = Router();

router.get('/heroes', (req:Request, res:Response)=>{

    const query = `
        SELECT *
        FROM heroes`;

    //Especifica os tipos para saber como funcionam as instruções
    MySQL.executarQuery(query, (err:any, heroes: Object[]) =>{
        if(err){
            res.status(400).json({
                ok:false,
                error: err
            });
        }else {
            res.json({
                ok:true,
                heroes: heroes
            });
        }
    });

});

router.get('/heroes/:id', (req:Request, res:Response)=>{
    const id = req.params.id;

    res.json({
        ok:true,
        mensagem: 'Tudo está bem!',
        id: id
    });
});

export default router;