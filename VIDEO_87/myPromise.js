import fs from "fs/promises"

let a = await fs.readFile("swa.txt")
console.log(a.toString());
