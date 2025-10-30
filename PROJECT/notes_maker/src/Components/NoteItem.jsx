import React from 'react'

function NoteItem({ note, deleteNote }) {
  return (
    <div
      className="p-4 rounded-xl shadow-md flex justify-between items-start transform hover:scale-105 transition-all duration-200"
      style={{ backgroundColor: note.color }}
    >
      <p className="font-medium text-gray-800 leading-relaxed whitespace-pre-wrap break-words">
        {note.noteText}
      </p>
      <button
        onClick={() => deleteNote(note.id)}
        className="text-red-600 font-bold text-lg hover:text-red-800 ml-2 transition-all"
      >
        ✖
      </button>
    </div>
  )
}

export default NoteItem
