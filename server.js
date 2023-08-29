const http= require('http');
const fs= require('fs');

const server= http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{"content-type":"text-html"});
        res.write("This is Home Page");
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{"content-type":"text-html"});
        res.write("This is About Page");
        res.end();
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{"content-type":"text-html"});
        res.write("This is Contact Page");
        res.end();
    }
    else if(req.url=='/file-write'){
        fs.writeFile('demo.txt','hello world',(error)=>{
            if(error){
                res.writeHead(200,{"content-type":"text-html"})
                res.write('file create fail');
                res.end();
            }else{
                res.writeHead(200,{"content-type":"text-html"})
                res.write('file create success');
                res.end();
            }
        })
    }
})

server.listen(3000,()=>{
    console.log('Server run success');
})