import { useState, useEffect } from 'react'
import NoteFrom from './Components/NoteFrom'
import NoteList from './Components/NoteList'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const addNote = (Text, color) => {
    const newNote = {
      id: Date.now(),
      Text,
      color
    }
    setNotes([newNote, ...notes])
  }

  useEffect(() => {
   const savedNote = JSON.parse(localStorage.getItem("notes"))
   setNotes(savedNote)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [third])
  

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
