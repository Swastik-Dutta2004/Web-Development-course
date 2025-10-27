import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage, { JobLoader } from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'



const App = () => {

  const addJob = async (newJob) => {
    
  }

  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
      
    })
    return
    
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/Add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage deleteJob = {deleteJob} />} loader={JobLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App