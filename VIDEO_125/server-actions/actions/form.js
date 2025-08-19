  "use server"
import fs from 'fs/promises'

export const submitAction = async (e) => {
  console.log(e.get("name"), e.get("Address"));
  await fs.writeFile("swa.txt",`Hey its me ${e.get("name")} and my address is ${e.get("Address")}`)
  
}