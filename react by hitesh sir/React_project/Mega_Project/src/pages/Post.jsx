import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Button, Container } from '../Components'
import { useParams, useNavigate, Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

function post() {
    const [Post, setPost] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = Post && userData ? Post.id === userData.$id : false

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }else{
                    navigate('/')
                }
            })
        }else{
            navigate('/')
        }
    }, [])
    

  return (
    <div>post</div>
  )
}

export default post