import React, { useState } from 'react'

const NoteFrom = ({addtext}) => {
    const [Notes, setNotes] = useState("")
    const [Color, setColor] = useState("#fef08a")

    const HandleSubmit =(e) => {
        e.preventDefult()
        if (text.trim() === "") return
        addtext(Notes, Color)
        setNotes("")
    }

    return (
        <form action="">
            <input type="text"
                placeholder='Add your note'
                value={Notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border p-2 flex-1 rounded-md"
                />

            <input type="color"
                value={Color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-10 border rounded-md"
            />
            <button onClick={HandleSubmit}
            className="bg-yellow-600 text-white px-4 py-2 rounded-md"
            >Submit</button>
        </form>
    )
}

export default NoteFrom