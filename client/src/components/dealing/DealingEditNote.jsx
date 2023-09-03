import { useState, useEffect } from "react"

const DealingEditNote = ({ initialNote }) => {
  const [note, setNote] = useState("")
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if(initialNote) {
      setNote(initialNote)
    }
  }, [initialNote])


  const handleClick = () => {
    setEditing(!editing)
  }

  const handleChange = (e) => {
    setNote(e.target.value)
  }

  const handleSave = () => {
    // logique pour sauvegarder la note
    setEditing(false)
  }

  return (
    <div className="flex items-center">
      {editing ? (
        <>
          <input
            type="text"
            value={note}
            onChange={handleChange}
            className="ml-4 bg-white border border-gray-300 rounded py-1 px-2"
            placeholder="Enter notes"
          />
          <span className="ml-2">
            <i onClick={handleSave} className="fa-solid fa-pencil"></i>
          </span>
        </>
      ) : (
        <>
          {initialNote ? (
            <>
              <span className="ml-4">{note}</span>
              <span className="ml-2">
                <i onClick={handleClick} className="fa-solid fa-pencil"></i>
              </span>
            </>
          ) : (
            <i onClick={handleClick} className="fa-solid fa-pencil"></i>
          )}
        </>
      )}
    </div>
  )
}

export default DealingEditNote
