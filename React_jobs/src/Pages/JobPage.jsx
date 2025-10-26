import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const JobPage = () => {
    // const [job, setJob] = useState(null)
    // const [Loading, setLoading] = useState(true)
    const {id} = useParams()
    const job = useLoaderData()

    // useEffect(() => {
    //   const fetchJob = async() => {
    //     try {
    //         const res = await fetch(`/api/jobs/${id}`)
    //         const data = await res.json()
    //         setJob(data)
    //     } catch (error) {
    //         console.log('Fetch error data', error);
    //     } finally{
    //         setLoading(false)
    //     }
    // }
    // fetchJob()
    // }, [])
    
  return <h1>{job.title}</h1>
}

const JobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data =  await res.json();
    return data
}


export {JobPage as default, JobLoader}