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
            password: '1234567',
            database: 'node_db'
        });
        this.conectarDB();
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
