import { useState } from 'react'
import NoteFrom from './Components/NoteFrom'
import NoteList from './Components/NoteList'
import './App.css'

function App() {
  const [Notes, setNotes] = useState([])

  return (
    <>
      <div>
        <h1>Notes maker</h1>
        <NoteFrom/>
        <NoteList/>
      </div>
    </>
  )
}

export default App
