import { writeFile } from "fs";
import fs from "fs/promises"

let a =  await fs.readFile("swastik.txt")

let b = await fs.appendFile("swastik.txt","\n\n\n\n\n dbcisxlsx")
console.log(a.toString(),b);
