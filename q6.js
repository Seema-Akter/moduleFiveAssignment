const http= require('http');
const url= require('url');

const server= http.createServer((req,res)=>{
    if(req.url=='/about'){
        res.writeHead(200,{"content-type":"text-html"});
        res.write("This is About Page");
        res.end();
    }
})

server.listen(3000,()=>{
    console.log('Server run success');
})