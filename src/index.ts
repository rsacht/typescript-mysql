import Server from "./server/server";

const server = Server.init(3000);

server.start(()=>{
    console.log('Start Server na porta: 3000. Acesse http://localhost:3000 ')
});