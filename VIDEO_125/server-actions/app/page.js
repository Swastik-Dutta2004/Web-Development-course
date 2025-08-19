import Image from "next/image";
import fs from 'fs/promises'

export default function Home() {
const submitAction = async (e) => {
  "use server"
  console.log(e.get("name"). e.get("Address"));
  
  let a = await fs.readFile("swa.txt","Hey its me SwAA 😁")
  console.log(a);
  
}

  return (
    <div>
      <form className="mx-auto my-5" action="{submitAction}">
        <div className="py-2">
          <label className="px-5" htmlFor="Name">Name</label>
          <input className="bg-white text-black " type="text" name="name" id="" />
        </div>
        <div className=" py-2">
          <label className="px-5" htmlFor="Address ">Address</label>
          <input className="bg-white text-black" type="text" name="Address" id="" />
        </div>
        <div className="py-2 px-5">
          <button className="bg-amber-500 border border-2-red">Click me</button>
        </div>
      </form>
    </div>
  );
}
