import Image from "next/image";


export default function Home() {
  return (
    <div>I am page
      <Image className="mx-auto" width= {400} height = {300} src="https://i.pinimg.com/736x/91/10/a3/9110a3b4f467f9dd10497c5c9d65aed0.jpg"/>
    </div>
  );
}



