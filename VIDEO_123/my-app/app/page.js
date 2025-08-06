import Image from "next/image";

export default function Home() {
  return (
    <div className=" container my-5">
        <Image className="mx-auto" width={100} height={100} src="https://i.pinimg.com/736x/df/f5/7e/dff57e8dd1dfe1e500e475660f3e3f8d.jpg" alt="" />
      Hey there
    </div>
  );
}
