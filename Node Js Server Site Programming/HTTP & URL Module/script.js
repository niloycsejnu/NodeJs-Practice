// HTTP Module
/*
let http = require('http');
let server = http.createServer((req,res)=>{
    res.end("Hello World");
})
server.listen(4040);
console.log("Server running is successful");
*/

/*
let http = require('http');
let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is Home</h1>');
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is About</h1>');
        res.end();
    }
    else if(req.url == "/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>This is Contact</h1>')
        res.end();
    }
});
server.listen(4040);
console.log("Successful");
*/

//----------------------------------------------------------------------

//URL Module
/*
let http = require('http');
let url = require('url');

let server = http.createServer((req,res)=>{
    let add = "http://rabbil.com/blog.html?year=2020&month=july";
    let urlObj = url.parse(add,true);
    let hostName = urlObj.host;
    let pathName = urlObj.pathname;
    let searchName = urlObj.search;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(hostName);
    res.end();
});

server.listen(3030);
console.log("Successful");
*/
//--------------------------------------------------------------------------