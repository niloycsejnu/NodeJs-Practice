//Synchronous
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url = "/"){
        let result = fs.existsSync('demo.txt');
            if(result){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Exists");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File not Exists");
                res.end();
            }
    }
    
})

server.listen(3030);
console.log("Successful");