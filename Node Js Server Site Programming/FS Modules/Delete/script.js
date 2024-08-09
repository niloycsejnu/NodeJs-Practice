
//Asynchronous
/*
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url = "/"){
        fs.unlink('demo.txt',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Error");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("No Error");
                res.end();
            }
        });

    }
    
})

server.listen(3030);
console.log("Successful");
*/
//Synchronous
/*
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url = "/"){
        let error = fs.unlinkSync('demo.txt');
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Error");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("No Error");
                res.end();
            }
    

    }
    
})

server.listen(3030);
console.log("Successful");
*/
