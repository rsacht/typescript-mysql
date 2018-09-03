import express = require('express');

export default class Server{
    public app: express.Application;
    public port: number;

    constuctor(porta:number){
        this.port = porta;
        this.app = express();
    }

    static init (porta: number){
        return new Server(porta);
    }

    start(callback: Function){
        this.app.listen(this.port, callback);
    }
}