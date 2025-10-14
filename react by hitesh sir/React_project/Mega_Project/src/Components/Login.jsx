import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../Store/authSlice'
import { Button, Input, Logo } from './Index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from "react-hook-form"

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, seterror] = useState(null)

    const login = async (data) => {
        seterror("")
        try {
            const sesssion = await authService.login(data)
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
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            lable="Email"
                            placeHolder="Enter Your Email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                        />

                        <Input
                            lable= "Password"
                            placeHolder = "Enter your Password"
                            type = "Password"
                            {...register("Password",{
                                required: true,
                            })}
                        />
                        <Button
                        type='submit'
                        classname='w-full'
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login