import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../Components/Spinner'

const JobPage = () => {
    // const [Jobs, setJobs] = useState(null)
    // const [Loading, setLoading] = useState(true)
    const { id } = useParams()
    const Jobs = useLoaderData()

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`)
    //             const data = await res.json()
    //             setJobs(data)
    //         } catch (error) {
    //             console.error("Data not found", error);
    //         }
    //         finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchJob()
    // }, [])

    return <h1>{Jobs.title}</h1>
    
}

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export {JobPage as default, jobLoader}