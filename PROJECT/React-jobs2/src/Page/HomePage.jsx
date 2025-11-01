import React from 'react'
import Hero from '../Components/Hero'
import HomeCard from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/ViewAllJobs'

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCard/>
            <JobListings/>
            <ViewAllJobs/>
        </>
    )
}

export default HomePage