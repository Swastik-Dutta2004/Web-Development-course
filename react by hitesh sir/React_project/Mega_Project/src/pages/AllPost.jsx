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
        <div className='flex flex-wrap'>
            {Posts.map((post) => {
                <div key={post.$id} className='p-2 w-1'>
                    <PostCard post= {post}/>
                </div>
            })}

        </div>
        </Conatiner>
    </div>
  )

}
export default AllPost