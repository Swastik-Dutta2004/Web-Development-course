import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)
  
  return (
    <>
     <div className="conatiner">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("username", {required: true, minLength: 3, maxLength: 8})} type="text" placeholder='Username'/>
        {errors.username && <div className=''>There is an error ion your Username</div>}
        <br />
        <input {...register("password")} type="password" placeholder='Password'/>
        <br />
        <input type="submit" value="submit" />
      </form>
     </div>
    </>
  )
}

export default App
