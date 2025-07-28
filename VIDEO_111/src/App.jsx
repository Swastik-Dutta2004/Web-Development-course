import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbarr'

function App() {
  const [Card, setCard] = useState([])

  const FetchData = async () => {
    let a = await fetch(" https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCard(data)
    console.log(data);
  }

  useEffect(() => {
    FetchData()
  }, [])
  

  return (
    <>
    <Navbar/>
    <div className="container">
      {Card.map((card)=>{
        return <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>UserId: {card.userId}</span>
        </div>
      })}
    </div>
    </>
  )
}

export default App
