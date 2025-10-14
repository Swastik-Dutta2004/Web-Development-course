import React from 'react'
import authService from "../appwrite/auth"
import {data, Link, useNvaigate} from 'react-router-dom'
import {login} from "../Store/authSlice"
import {Button, Input, Logo} from "./Index"
import { useDispatch } from 'react-redux'
import {useForm, useFrom} from "react-hook-form"

const Signup = () => {
    const dispatch = useDispatch()
    const [error, seterror] = useState(null)
    const navigate = useNvaigate()
    const {handleSubmit, register} = useForm() 
    
    const create = async(data) => {
        seterror("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch (login(userData))
                    navigate("/")
            }
        } catch (error) {
            seterror(error.message)
        }
    }
  return (
    <div>Signup</div>
  )
}

export default Signup