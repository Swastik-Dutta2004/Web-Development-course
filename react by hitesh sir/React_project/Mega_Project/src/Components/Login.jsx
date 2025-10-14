import React from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import {login as authLogin} from '../Store/authSlice'
import {Button, Input, Logo} from './Index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm, useFrom} from "react-hook-form"

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} =  useForm()
    const [error, seterror] = useState(null)

    const login = async(data) => {
        seterror("")
        try {
           const sesssion  = await authService.login(data)  
           if (sesssion) {
            const userDate = await authService.getCurrentUser()
            if (userDate) {
                dispatch.authLogin(userDate)
                navigate("/")
            }
           }
        } catch (error) {
            seterror(error.message)
            
        }
    }

  return (
    <div>Login</div>
  )
}

export default Login