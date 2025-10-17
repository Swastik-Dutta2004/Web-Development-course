import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config"

function AllPost() {
    const [Post, setPost] = useState([])
    useEffect(() => {}, [])

    appwriteService.getPost([]).then((Posts) => {
        if (Posts) {
            setPost(Posts.documents)
        }
    })
    
  return (
    <div>AllPost</div>
  )
}

export default AllPost