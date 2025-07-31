import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: <Home />
    },
    {
      path: "/About",
      Component: <About />
    },
    {
       path: "/Contact",
      Component: <Contact />
    }
  ])
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
