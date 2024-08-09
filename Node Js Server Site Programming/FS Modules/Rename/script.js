/*
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url = "/"){
        fs.rename('rename.txt','renameNew.txt',function(error){
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
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url = "/"){
    let result = fs.renameSync('renameNew.txt','renameNewSync.txt');
            if(result){
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
