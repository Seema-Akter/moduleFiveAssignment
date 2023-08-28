let http= require('http');
let fs= require('fs');

const server= http.createServer((req,res)=>{
    if(req.url=='/file-write'){
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

server.listen(7000,()=>{
    console.log('Server run success');
})