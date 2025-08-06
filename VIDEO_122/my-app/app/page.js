// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "./components/Navbar";

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("hey i am swa");
  
  let a = fs.readFile(".gitignore")
  a.then(e => {console.log(e.toString());
  })
  return (
    <div>
      <Navbar/>
      Hey I am a componets 
      {/* {count} */}
      {/* <button onClick={() => {setcount(count+1)}}>Jurk me</button> */}
    </div>
  );
}
