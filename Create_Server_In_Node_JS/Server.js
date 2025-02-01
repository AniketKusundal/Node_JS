const  http = require('http')

const server = http.createServer((req , res)=>{
    res.statusCode = 200
    res.setHeader = ({'content-type' : 'text/html'})
    for (let i = 0; i < 100; i++) 
        res.write("<input type = 'text' />") 
    
    res.end();
})

server.listen(8000 ,() =>{
    console.log("Server Is Running.....");
    
})