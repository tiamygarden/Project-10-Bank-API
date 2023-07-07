import { useState } from "react"

const DealingEditNote = () => {
  const [note, setNote] = useState("")
  const [editing, setEditing] = useState(false)

  const handleClick = () => {
    if (editing) {
      setNote("")
    }
    setEditing(!editing)
  }

  const handleChange = (e) => {
    setNote(e.target.value)
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
            <i onClick={handleClick} className="fa-solid fa-pencil"></i>
          </span>
        </>
      ) : (
        <>
          <span className="ml-4">{note}</span>
          <span className="ml-2">
            <i onClick={handleClick} className="fa-solid fa-pencil"></i>
          </span>
        </>
      )}
    </div>
  )
}

export default DealingEditNote
