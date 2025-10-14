import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

const Postcard = ({$id, title, featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 '>
            <div className='w-full justify-center'>
                <img src= {appwriteService.getFilePreview(featuredImage)} alt="" />
            </div>
            <title className='text-xl font-bold'>
                {title} 
            </title>
        </div>
    </Link>
  )
}

export default Postcard