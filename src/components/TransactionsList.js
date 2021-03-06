import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({ transactions, searchTerm }) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {searchTerm === '' ?
          transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
          : transactions.filter(transaction => {
            return transaction.category.includes(searchTerm) || transaction.description.includes(searchTerm)
        }).map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}

      </tbody>
    </table>
  )
}

export default TransactionsList
