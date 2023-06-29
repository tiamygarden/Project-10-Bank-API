import MainLayout from "../layouts/MainLayout.jsx"


const Dealing = ({account_ID}) => {
  const transactions = [
    { date: "June 20th, 2020", description: "Transaction 1", amount: "$5.00", balance: "$2087.79" },
    { date: "June 21st, 2020", description: "Transaction 2", amount: "$10.00", balance: "$2077.79" },
    { date: "June 22nd, 2020", description: "Transaction 3", amount: "$15.00", balance: "$2062.79" },
    { date: "June 23rd, 2020", description: "Transaction 4", amount: "$20.00", balance: "$2042.79" },
    { date: "June 24th, 2020", description: "Transaction 5", amount: "$25.00", balance: "$2017.79" },
    { date: "June 25th, 2020", description: "Transaction 6", amount: "$30.00", balance: "$1987.79" },
  ]

  return (
    <MainLayout>
      <div className="bg-dark height-85">
        <h2 className="white pt-5 pb-5">Transactions</h2>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}

export default Dealing

