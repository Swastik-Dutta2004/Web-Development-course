import Image from "next/image";
import { POST } from "./api/add/route";

export default function Home() {
  const handleclick = async () => {
    let data = {
      name: "Swa",
      roll: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // Automatically converted to "username=example&password=password"
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Next.js Api routes</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}
