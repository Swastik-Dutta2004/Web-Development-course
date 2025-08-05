import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";



function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="useername">
          <input {...register("username")} type="text" name="userename" />
        </div>

        <div className="password">
          <input {...register("password",)} type="password" name="password" id="" />
        </div>

        <div className="submit">
          <input type="submit" name="submit" />
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
