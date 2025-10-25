import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCard from './Components/HomeCard'
import JobListing from './Components/JobListings'
import ViewAllJobs from './Components/ViewAllJobs'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCard/>
      <JobListing/>
      <ViewAllJobs/>
    </>
  )
}

export default App