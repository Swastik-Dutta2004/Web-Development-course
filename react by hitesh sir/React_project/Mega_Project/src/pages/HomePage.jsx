import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../Components'

function HomePage() {
    const [Post, setPost] = useState(second)

    useEffect(() => {
      appwriteService.getPosts().then((post) => {
        if (post) {
            setPost(post.documents)
        }
      })
    }, [third])
    
  return (
    <div>HomePage</div>
  )
}

export default HomePage