import Server from "./server/server";
import router from './router/router';

const server = Server.init(3000);
server.app.use(router);

server.start(()=>{
    console.log('Start Server na porta: 3000. Acesse http://localhost:3000');
});