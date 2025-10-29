import React, { useState } from 'react'

const NoteFrom = () => {
    const [Notes, setNotes] = useState("")
    const [Color, setColor] = useState("#fef08a")

    const HandleSubmit = 

    return (
        <form action="">
            <input type="text"
                placeholder='Add your note'
                value={Notes}
                onChange={(e) => setNotes(e.target.value)}
                />

            <input type="color"
                value={Color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button onClick={HandleSubmit}>Submit</button>
        </form>
    )
}

export default NoteFrom