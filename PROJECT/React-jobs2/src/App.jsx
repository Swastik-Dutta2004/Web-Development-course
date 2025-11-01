import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from './Components/HomeCards'
import JobListings from './Components/JobListings'
import ViewAllJobs from './Components/ViewAllJobs'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero title = "Becoming a web Developer" subtitle = "Just fucking Do it"/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </div>
  )
}

export default App