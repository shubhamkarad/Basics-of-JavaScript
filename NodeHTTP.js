var http = require('http');

http.createServer((req, res)=>{
    if(!req){
        res.write("Yes It is working");
    }
}).listen(8080);