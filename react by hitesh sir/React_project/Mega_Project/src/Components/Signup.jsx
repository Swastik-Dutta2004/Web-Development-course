import React from 'react'
import authService from "../appwrite/auth"
import {Link, useNvaigate} from 'react-router-dom'
import {login} from "../Store/authSlice"
import {Button, Input, Logo} from "./Index"
import { useDispatch } from 'react-redux'
import {useForm, useFrom} from "react-hook-form"

const Signup = () => {
    const dispatch = useDispatch()
    const [erroor, seterroor] = useState(null)
    const navigate = useNvaigate()
    const {handleSubmit, register} = useForm() 

    
  return (
    <div>Signup</div>
  )
}

export default Signup