"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div>
      <form className="mx-auto my-5" ref= {ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div className="py-2">
          <label className="px-5" htmlFor="Name">Name</label>
          <input className="bg-white text-black " type="text" name="name" id="name" />
        </div>
        <div className=" py-2">
          <label className="px-5" htmlFor="Address ">Address</label>
          <input className="bg-white text-black" type="text" name="Address" id="Address" />
        </div>
        <div className="py-2 px-5">
          <button className="bg-amber-500 border border-2-red">Click me</button>
        </div>
      </form>
    </div>
  );
}
