import React from 'react'

function NoteItem({notes, deleteNote}) {
  
  
  return (
    <div className="p-4 rounded-lg shadow-md flex justify-between items-start"
      style={{ backgroundColor: notes.color }}>
        <p className="font-medium text-gray-800">{notes.text}</p>
        <button
        onClick={() => deleteNote(notes.id)}
        className="text-red-600 font-bold ml-2"
        > ✖ </button>
      </div>
  )
}

export default NoteItem