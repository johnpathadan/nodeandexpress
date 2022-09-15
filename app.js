const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
      //action in form:  the url where the request should be send to
      //POST means sending infoo to the server
    );
    res.write("</html>");
    return res.end(); //to avoid reading the following res.write()s
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Welcome to my node.js server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

/*
first chrome run will take tou to the form, then when send is 
clicked it will take you to http://localhost:3000/message
it will run the rest of the res.write() code as url !== "/"
*/
