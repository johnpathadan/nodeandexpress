const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req);
    process.exit();  //hard exited out event loop(not suitable when running websites because users cant access it now)
}); 

server.listen(3000); 