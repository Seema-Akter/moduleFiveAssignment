const http= require('http');
const url= require('url');

const server= http.createServer((req,res)=>{
        res.writeHead(200,{"content-type":"text-html"});
        res.write("Hello World");
        res.end();
})

server.listen(3000,()=>{
    console.log('Server run success');
})