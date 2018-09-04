import mysql = require('mysql');

export default class MySQL{
    //Padrão Singleton
    //Uma instancia do mesmo tipo da classe
    private static _instance: MySQL;

    //Propriedades
    conecta: mysql.Connection;
    conectado: boolean = false;

    constructor(){
        console.log('Classe inicializada');

        this.conecta = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password:'123456',
            database: 'node_db'
        });

        this.conectarDB();
    }

    private conectarDB(){
        this.conecta.connect((err:mysql.MysqlError)=>{
            if(err){
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de dados online!')
        });
    }
}