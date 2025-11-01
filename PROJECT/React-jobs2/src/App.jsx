import { Route,
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider } from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from './Components/HomeCards'
import JobListings from './Components/JobListings'
import ViewAllJobs from './Components/ViewAllJobs'

const route = createBrowserRouter(createRoutesFromElements(<Route index element= {<h1>My app</h1>}/>))

const App = () => {
  return <RouterProvider router={}/>
}

export default App