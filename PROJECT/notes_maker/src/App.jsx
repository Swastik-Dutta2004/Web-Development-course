import { useState, useEffect } from 'react'
import NoteForm from './Components/NoteForm'
import NoteList from './Components/NoteList'
import './App.css'

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  // Save notes whenever they change
  useEffect(() => {
    console.log("Saving to localStorage:", notes)
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // delete a note
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  // add a new note
  const addNote = (text, color) => {
    const newNote = {
      id: Date.now(),
      text,
      color
    }
    console.log("New note added:", text, color);
    setNotes((prevNotes) => [newNote, ...prevNotes])
  }


  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-700">Notes Maker</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  )
}

export default App
