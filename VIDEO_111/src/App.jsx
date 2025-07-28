import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbarr'

function App() {
  const [Card, setCard] = useState([])

  const FeatchData = async () => {
    let a = await fetch(" https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCard(data)
    console.log(data);
  }

  useEffect(() => {
    FeatchData()
  }, [])
  

  return (
    <>
    <Navbar/>
    
    </>
  )
}

export default App
