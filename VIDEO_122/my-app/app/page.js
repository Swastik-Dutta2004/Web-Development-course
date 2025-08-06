"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <div>
      I am a componets {count}
      <button onClick={() => {setcount(count+1)}}>Jurk me</button>
    </div>
  );
}
