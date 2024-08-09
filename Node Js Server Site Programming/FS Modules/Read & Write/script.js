//Asynchronous Read
/*
let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.readFile('Home.html',(error,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        });
    }
});
server.listen(4040);
console.log("Successful");
*/

//Synchronous Read

/*
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        let myData = fs.readFileSync('Home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }

})

server.listen(5050);
console.log("Successful");
*/

//Asynchronous Write
/*
let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.writeFile('Demo.text','Hello World',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Error");
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Not Error");
                res.end();
            }
        });
    }
});
server.listen(5050);
console.log("Successful");
*/

//Synchronous Write
/*
let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        let error = fs.writeFileSync('Sync.text','File Sync')
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Error");
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Not Error");
                res.end();
            }
    }
    });
server.listen(5050);
console.log("Successful");
*/