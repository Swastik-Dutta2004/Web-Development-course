import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Components/Spinner'

const JobPage = () => {
    const [Jobs, setJobs] = useState(null)
    const { id } = useParams()
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.error("Data not found", error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchJob()
    }, [])

    return (
        <div>JobPage</div>
    )
}

export default JobPage