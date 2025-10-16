import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../Index'
import appwriteService from '../../appwrite/config'
import { data, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({Post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
      defaultValues: {
      title: Post?.title || '',
      slug: Post?.slug || '',
      contant: Post?.contant || '',
      status: Post?.status || 'active',
    }
  })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.useData)

    const submit = async (data) => {
      if(Post){
        const file = data.image[0] ? appwriteService.uplodeFile(data.image[0]) :null
      }
      if (file) {
        appwriteService.deleteFile(Post.featureImage)
      }

       const dbPost = await appwriteService.updatePost(Post.$id,{
        ...data,
        featureImage: file ? file.$id : undefined,

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
       })

    }

  return (
    <div>PostForm</div>
  )
}

export default PostForm