import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from './Components/HomeCards'
import JobListings from './Components/JobListings'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero title = "Becoming a web Developer" subtitle = "Just fucking Do it"/>
      <HomeCards/>
      <JobListings/>
    </div>
  )
}

export default App