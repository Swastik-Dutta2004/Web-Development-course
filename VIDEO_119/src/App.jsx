import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
    if (data.username !== "shubham") {
      setError("myform",{message :"Your form is not in good order"})
    }
    if(data.username){
      setError("Blocked",{message:"This Person is blocked"})
    } 
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="conatiner">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="username">
            <input
              {...register("username", {
                required: { value: true, message: "These filed is required" },
                minLength: { value: 3, message: "Min length is 3" },
                maxLength: { value: 8, message: "Max length is 8" },
              })}
              type="text"
              placeholder="Username"
            />
            {errors.username && (
              <div className="red">{errors.username.message}</div>
            )}
          </div>

          <div className="password">
            <input
              {...register("password", {
                required: { value: true, message: "These filed is required" },
                minLength: { value: 3, message: "Min length is 3" },
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (<div className="red">{errors.password.message}</div>)}
          </div>

          <div className="submit">
            <input disabled={isSubmitting} type="submit" value="submit" />
            {errors.myform && (<div className="red">{errors.myform.message}</div>)}
            {errors.Blocked && (<div className="red">{errors.Blocked.message}</div>)}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
