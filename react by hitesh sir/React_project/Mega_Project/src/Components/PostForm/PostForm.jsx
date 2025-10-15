import React from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from "../Index"
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({post}) => {
    const {register, handleSubmit,watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title:post.content ||'',
            slug: post?.content || '',
            content: post?.content || '',
            status: post?.content || '',
        },
    })

    const navigate = useNavigate()
    const useData = useSelector(state => state.user.useData)
    
  return (
    <div>PostForm</div>
  )
}

export default PostForm