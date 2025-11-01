import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCard from './Components/HomeCard'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero title = "Becoming a web Developer" subtitle = "Just fucking Do it"/>
      <HomeCard/>
    </div>
  )
}

export default App