"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <div>
      I am a Component {count} <button onClick={() => setcount (count + 1)}>increase</button>
    </div>
  );
}
