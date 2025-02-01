const  http = require('http')
const url  = require('url')

const server = http.createServer((req , res)=>
{
    // req.url = '/Puma-Unisex-Adult-Smashic-Black-Matte-Sneaker/dp/B0BSLLDJRC/ref=sr_1_2_sspa?crid=AJPNJJ5JEKCB&dib=eyJ2IjoiMSJ9.lrSSpmsglFZ-VOhRBOcU7tl6boPTIiqhts8HZObmTb4meo_zwaT_2I_Cwh3L_jDuGHF-maS9WYkUlYVFkq'

    let UrlData = url.parse(req.url , true).query
    console.log(UrlData);
    
    res.statusCode = 200
    res.setHeader = ({'content-type' : 'text/html'})
        res.write("<h1>Hello nodemon</h1>") 
        res.write("Your Url" + req.url)
    
    res.end();
})

server.listen(8000 ,() =>{
    console.log("Server Is Running.....");
    
})


//  npx nodemon Server2.js  ---->  This command for the run the nodemon it automatically save the changes and Keep the server start 