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

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App