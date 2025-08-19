"use client"
import Image from "next/image";

export default function Home() {
  const handlechange = async () => {
    let data = {
      name: "Swastik",
      roll: "coder"
    }
    let a = await fetch("./api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await a.json()
    console.log(result);

  }
  return (
    <div>
      <h1 className="text-xl font-bold text-teal-900 bg-amber-100">Next.js api routes</h1>
      <button className="font-bold bg-amber-700 text-black mx-auto" onClick={handlechange}>Click me</button>
    </div>
  );
}
