const fs = require('fs')
console.log(fs);

//  this is create a file and write data in the file
fs.writeFile("Demo.txt" , "This a Fs module DemoFile 1" , ()=>{
    console.log("File Write Succesful");

    fs.readFile("Demo.txt" , (error , data)=>{
        // if (error) throw error   it handeles the error
        console.log(data.toString());   // it conveted into a string
    })

})