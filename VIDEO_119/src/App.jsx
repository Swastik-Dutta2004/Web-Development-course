import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";



function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const delay = (d)=> {
    return new Promise((reject, resolve) => {
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

const onSubmit =  async (data) => {
  await delay(2)
  console.log(data);
}


  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="useername">
          <input {...register("username",{ required: {value:true, message:"This field is required"}, minLength:{value:3, message:"Atlest 3 chracter needed"}, maxLength:{value:8, message:"upto 8 chracters"} })} type="text"  placeholder="Username" />
          {errors.username && <div className="red">{errors.username.message}</div>}
        </div>

        <div className="password">
          <input {...register("password",{ required: {value:true, message:"This field is required"}, minLength:{value:3, message:"Atlest 3 chracter needed"}, maxLength:{value:8, message:"upto 8 chracters"}})} type="password" id="" placeholder="Password"/>
          {errors.password && <div className="red">{errors.password.message}</div>}
        </div>

        <div className="submit">
          <input  type="submit" name="submit" />
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
