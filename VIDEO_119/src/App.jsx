import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";



function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();
  
  const delay = (d)=> {
    return new Promise(( resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

const onSubmit =  async (data) => {
  await delay(2)
  console.log(data);
  if(data.username !== "shubham"){
    setError("myform",{message:"Your form is not in good order"})
  }
}


  return (
    <>
    {isSubmitting && <div>...Loading</div>}
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="useername">
          <input {...register("username",{ required: {value:true, message:"This field is required"}, minLength:{value:3, message:"Atlest 3 character needed"}, maxLength:{value:8, message:"upto 8 characters"} })} type="text"  placeholder="Username" />
          {errors.username && <div className="red">{errors.username.message}</div>}
        </div>

        <div className="password">
          <input {...register("password",{ required: {value:true, message:"This field is required"}, minLength:{value:3, message:"Atlest 3 character needed"}})} type="password" id="" placeholder="Password"/>
          {errors.password && <div className="red">{errors.password.message}</div>}
        </div>

        <div className="submit">
          <input disabled = {isSubmitting} type="submit" name="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
