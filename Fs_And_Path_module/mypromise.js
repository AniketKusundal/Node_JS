// We use Here "type": "module", in JSon file We change here tho we use new method to write code in NodeJs like this following code

import fs from "fs/promises"

let a = await fs.readFile("Demo.txt")
console.log(a.toString());


let b = await fs.appendFile("Demo.txt" , "You Are Grate Dude")
console.log(b);
