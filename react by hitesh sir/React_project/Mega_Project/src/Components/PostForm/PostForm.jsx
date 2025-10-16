import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../Index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({ Post }) {
  const { register, handleSubmit, control, setValue, getValues } = useForm({
    defaultValues: {
      title: Post?.title || '',
      slug: Post?.slug || '',
      content: Post?.content || '',
      status: Post?.status || 'active',
    },
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.userData)

  const submit = async (data) => {
    if (Post) {
      const file = data.image?.[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null

      if (file) {
        await appwriteService.deleteFile(Post.featureImage)
      }

      const dbPost = await appwriteService.updatePost(Post.$id, {
        ...data,
        featureImage: file ? file.$id : Post.featureImage,
      })

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0])

      if (file) {
        const dbPost = await appwriteService.createPost({
          ...data,
          userID: userData.$id,
          featureImage: file.$id,
        })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  return (
    <div>PostForm</div>
  )
}

export default PostForm
