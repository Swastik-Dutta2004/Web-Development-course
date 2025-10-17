import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config"
import Conatiner from '../Components/container/Conatiner'

function AllPost() {
    const [Posts, setPosts] = useState([])
    useEffect(() => {}, [])

    appwriteService.getPosts([]).then((Posts) => {
        if (Posts) {
            setPosts(Posts.documents)
        }
    })
    
  return (
    <div>
        <Conatiner>
        {Posts.map((post) => {
            <PostCard key={post.$id} post ={post}/>
        })}
        </Conatiner>
    </div>
  )

}
export default AllPost