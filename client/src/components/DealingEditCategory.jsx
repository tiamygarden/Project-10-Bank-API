import React, { useState } from "react"

const DealingEditCategory = ({transaction}) => {
  const [display, setDisplay] = useState(false)
  const [categoryLabel, setCategoryLabel] = useState(transaction.category)

  function handleChange(e) {
    setCategoryLabel(e.target.value)
    setDisplay(false)
  }

  return (
    <div className="flex items-center">
      <span>Category:</span>
      {display ? (
        <select
          className="ml-4 bg-white border border-gray-300 rounded py-1 px-2"
          onChange={(e) => {handleChange(e)}}
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option selected={categoryLabel === 'Housing'}>Housing</option>
          <option value="Transportation">Transportation</option>
          <option selected={categoryLabel === 'Health'}>Health</option>
          <option value="Education">Education</option>
          <option value="Leisure">Leisure</option>
          <option value="Savings">Savings</option>
        </select>
      ) : (
        <>
          <span className="ml-4">{categoryLabel}</span>
          <span className="ml-4">
            <i
              onClick={() => {setDisplay(true)}}
              className="fa-solid fa-pencil"
            ></i>
          </span>
        </>
      )}
    </div>
  )
}

export default DealingEditCategory