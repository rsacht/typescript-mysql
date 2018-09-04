"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log('Classe inicializada');
        this.conecta = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456',
            database: 'node_db'
        });
        this.conectarDB();
    }
    static get instance() {
        //Se a instância existe retorna a instância
        //Se não cria uma nova instância igual à classe (Singleton)
        return this._instance || (this._instance = new this());
    }
    static executarQuery(query, callback) {
        this.instance.conecta.query(query, (err, results, fields) => {
            if (err) {
                console.log('Erro na query');
                console.log(err);
                return;
            }
            //Se a query tiver zero resulst gerará um array vazio
            if (results.length === 0) {
                callback('Nenhum registro com este valor foi encontrado!');
            }
            else {
                //null = erros
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.conecta.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de dados online!');
        });
    }
}
exports.default = MySQL;
