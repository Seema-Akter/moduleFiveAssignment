const http= require('http');
const url= require('url');

const server= http.createServer((req,res)=>{
    if(req.url=='/contact'){
        res.writeHead(200,{"content-type":"text-html"});
        res.write("This is Contact Page");
        res.end();
    }
})

server.listen(3000,()=>{
    console.log('Server run success');
})