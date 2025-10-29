import { useState, useEffect } from 'react'
import NoteFrom from './Components/NoteFrom'
import NoteList from './Components/NoteList'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const addNote = (text, color) => {
    const newNote = {
      id: Date.now(),
      text,
      color
    }
    setNotes([newNote, ...notes])
  }

  useEffect(() => {
   const savedNote = JSON.parse(localStorage.getItem("notes")) || []
   setNotes(savedNote)
  }, [])
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  

  return (
    <>
      <div className="min-h-screen bg-yellow-50 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-700">Notes maker</h1>
        <NoteFrom addNote = {addNote}/>
        <NoteList notes={notes} deleteNote={deleteNote}/>
      </div>
    </>
  )
}

export default App
