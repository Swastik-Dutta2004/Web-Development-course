import React from 'react'
import NoteItem from './NoteItem'

function NoteList({notes, deleteNote}) {
  if(notes.lenght === 0)
    return <p className="text-center text-gray-500">No notes yet 😴</p>
  return (
    <div  className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {notes.map((note) => {
        <NoteItem key={note.id} deleteNote={deleteNote}/>
      })}
    </div>
  )
}

export default NoteList