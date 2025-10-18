import React,{useState, useEffect} from 'react'
import {Container, PostFrom} from '../Components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPage() {
    const [Post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
      if (slug) {
        appwriteService.getPost(slug).then ((Post) => {
            if (Post) {
                setPost(Post)
            }
        })
      } else {
        navigate('/')
      }
    }, [slug, navigate])
    
  return Post ? (
    <div className='pu-4'>
        <Container>
            <PostFrom Post={Post}/>
        </Container>
    </div>
  ) : null
}

export default EditPage