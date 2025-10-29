import React from 'react'

function NoteItem({note, deleteNote}) {
  
  
  return (
    <div className="p-4 rounded-lg shadow-md flex justify-between items-start"
      style={{ backgroundColor: note.color }}>
        <p className="font-medium text-gray-800">{note.text}</p>
        <button
        onClick={() => deleteNote(note.id)}
        className="text-red-600 font-bold ml-2"
        > ✖ </button>
      </div>
  )
}

export default NoteItem