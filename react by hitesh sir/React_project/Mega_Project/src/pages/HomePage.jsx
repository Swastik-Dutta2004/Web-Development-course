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
    }, [])
    
  if (Post.length === 0) {
    return (
      <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {Post.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
  }
}

export default HomePage