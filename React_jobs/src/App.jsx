import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import JobsPage from './Pages/JobsPage'
import NotFoundPage from './Pages/NotFoundPage'
import JobPage, { JobLoader } from './Pages/JobPage'
import AddJobPage from './Pages/AddJobPage'
import EditJobPage from './Pages/EditJobPage'



const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };


  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
      
    })
    return
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/Add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage deleteJob = {deleteJob} />} loader={JobLoader} />
      <Route path='/edit-jobs/:id' element={<EditJobPage updateJobSubmit = {updateJob}/>} loader={JobLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App