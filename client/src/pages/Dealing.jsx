import { useState } from "react"
import { useLocation } from "react-router-dom"
import MainLayout from "../layouts/MainLayout.jsx"
import { transactions } from "../data/transactions.json"
import DealingEditCategory from "../components/DealingEditCategory.jsx"
import DealingEditNote from "../components/DealingEditNote.jsx"

const Dealing = () => {
  const [expandedRows, setExpandedRows] = useState([])
  const location = useLocation()
  const selectedAccountItem = location.state

  const toggleRowExpansion = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index))

    } else {
      setExpandedRows([...expandedRows, index])
    }
  }

  return (
    <MainLayout>
      <div className="bg-abgray h-full">
        <div className="flex w-full bg-white m-auto h-full py-5 mb-12">
          {selectedAccountItem && (
            <div className="flex w-full flex-col text-center">
              <h3 className="p-0 m-0 text-base font-normal">{selectedAccountItem.title}</h3>
              <p className="m-0 text-4xl font-bold">{selectedAccountItem.amount}</p>
              <p className="m-0">{selectedAccountItem.description}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-5/6 m-auto h-full">
          <table className="table-auto bg-white w-full border border-collapse mb-32">
            <thead className="bg-abgray">
              <tr>
                <th></th>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>AMOUNT</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <>
                  <tr
                    className="group hover:bg-slate-100 h-[55px] border cursor-pointer text-center"
                    onClick={() => toggleRowExpansion(index)}
                    key={index}
                  >
                    <td>
                      <i className={`fa-solid fa-chevron-${expandedRows.includes(index) ? 'up' : 'down'}`}></i>
                    </td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                  </tr>
                  {expandedRows.includes(index) && (
                    <tr>
                      <td colSpan="5" className="p-2 space-y-2">
                        <div className="flex items-center">
                          <span>Category type: {transaction.type}</span>
                        </div>
                        <DealingEditCategory transaction={transaction} />
                        <div className="flex items-center">
                          <span>Notes:</span>
                          {transaction.notes ? (
                            <span className="ml-4">{transaction.notes}</span>
                          ) : (
                            <DealingEditNote/>

                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dealing
