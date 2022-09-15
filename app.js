const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
}); 

server.listen(3000); 

/*
output will have GET method, headers, and the url - localhost:3000 (url is what comes after /, since here
/, it's just localhost:3000)
*/