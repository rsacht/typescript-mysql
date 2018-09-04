"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `
        SELECT *
        FROM heroes`;
    //Especifica os tipos para saber como funcionam as instruções
    mysql_1.default.executarQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes: heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensagem: 'Tudo está bem!',
        id: id
    });
});
exports.default = router;
