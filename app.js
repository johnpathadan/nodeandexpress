const http = require('http'); //./ needed for local modules, other ones - just http
//http is a core module, so http (http.js)

const server = http.createServer(function(req, res){   //takes requestListener as an argument - 
    //this executes for every incoming requests, 2 arguments (hover over it)
    console.log(req);
}); 

//function for createServer
// function rqListener(req, res){

// }
//http.createServer(rqListener); another way of doing this

//http.createServer((req, res) => {
//    console.log(req);
//})

//this is called event driven architecture - if x happens, do y


server.listen(3000); //listen - node will not immediately exit our script, instead keep it running to listen incoming requests
//in chrome, if you type in localhost:3000, in VS Code terminal, it will provide a bunch of properties