import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './Page/HomePage'
import JobsPage from './Page/JobsPage'
import NotFoundPage from './Page/NotFoundPage'
import JobPage, { jobLoader } from './Page/JobPage'
import AddPage from './Page/AddPage'

  const addJobs = () => {
    const addJobs = async(newJobs) => {
      const res = await fetch('/api/jobs',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newJobs)
      })
    }
  }


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/add-job' element={<AddPage addJobsSubmit={addJobs}/>} />
    <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App