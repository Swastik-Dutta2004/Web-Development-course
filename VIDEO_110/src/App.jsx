import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [boobs, setboobs] = useState(true)
  const [todo, settodo] = useState([
    {
      title:"Hey",
      desc:"stays productive "
    },
    {
      title:"yoo bro",
      desc:"love to watch movies"
    },
    {
      title:"How are you ",
      desc:"Obident"
    }
  ])

  const Todo = (todo) =>{return(<>
  <div className="todo">todo.title</div>
  <div className="todo">todo.desc</div>
  </>)}

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {boobs?<button>I can relased you stress 🙌🍑🍑💦💦</button>:<button>Laund</button>}

      <Todo/>
      {/* {boobs&&<button>I can relased you stress 🙌🍑🍑💦💦</button>} */}
      <div className="card">
        <button onClick={() => setboobs(!boobs)}>
          Toggle me Honey
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
