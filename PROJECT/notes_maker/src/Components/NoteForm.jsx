import React, { useState } from 'react'

function NoteForm({ addNote }) {
  const [noteText, setNoteText] = useState("")
  const [color, setColor] = useState("#fef08a")

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (noteText.trim() === "") return
    addNote(noteText, color)
    setNoteText("")
  }

  return (
    <form
      onSubmit={HandleSubmit}
      className="flex flex-col md:flex-row items-center gap-3 bg-white shadow-md rounded-xl p-4 mb-8 border border-yellow-200"
    >
      <input
        type="text"
        placeholder="✍️ Write your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="w-full flex-1 border border-yellow-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 placeholder-gray-400"
      />

      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 cursor-pointer rounded-md border border-gray-300"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-md shadow-sm transition-all"
        >
          Add 📝
        </button>
      </div>
    </form>
  )
}

export default NoteForm
