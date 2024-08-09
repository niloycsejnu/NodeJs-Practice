let fs = require('fs');

async function read(){
    let data = await fs.readFileSync('index.html','utf8');
    console.log(data);
}
async function append(){
    let data = await fs.appendFileSync('index.html','<p>Hello</p>','utf8');
    console.log(data);
}
async function createDir(){
    try{
        let data = await fs.mkdirSync('new');
    }catch(e){
        console.log(e);
    }
async function renameDir(){
    try{
        let data = await fs.rmdirSync();
    }catch(e){
        console.log(e);
    }

}
}
(async ()=>{
    // await read();
    // await append();
    // await createDir();
    // await renameDir();
})()

