import Navbar from './components/Navbar'
import { createBrowserRouter } from 'react-router'
import About from './components/About'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: <Home/>
    },
    {
      path: "/About",
      Component: <About/>
    },
    {
       path: "/About",
      Component: <About/>
    }
  ])
  return (
    <>
    <Navbar/>
      
    </>
  )
}

export default App
