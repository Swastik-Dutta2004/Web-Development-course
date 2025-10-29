import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg italic mt-6">
        No notes yet 😴 — add one above!
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  )
}

export default NoteList
