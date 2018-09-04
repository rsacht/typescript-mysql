import Server from "./server/server";
import router from './router/router';
import MySQL from "./mysql/mysql";

const server = Server.init(3000);
server.app.use(router);

const mysql = new MySQL();

server.start(()=>{
    console.log('Start Server na porta: 3000. Acesse http://localhost:3000');
});