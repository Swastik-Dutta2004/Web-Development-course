import Image from "next/image";

export default function Home() {
  const handlechange = async () => {
    let a = await fetch("./api/add",{method: "POST", 
    headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example1" }),
  });
  
    let result = awaita.json()
    console.log(result);
    
  }
  return (
    <div>
      <h1 className="text-xl font-bold text-teal-900 bg-amber-100">Next.js api routes</h1>
      <button className="font-bold bg-amber-700 text-black" onClick={handlechange}>Click me</button>
    </div>
  );
}
