// "use client"
// import { useState, useEffect } from "react";
import fs from 'fs/promises'

export default function Home() {

  let a = fs.readFile(".gitignore")
  a.then (e => {console.log(e.toString());
  })
  

  // const [count, setcount] = useState(0)
  return (
    <div>
      I am a Component {count} <button onClick={() => setcount (count + 1)}>increase</button>
    </div>
  );
}
