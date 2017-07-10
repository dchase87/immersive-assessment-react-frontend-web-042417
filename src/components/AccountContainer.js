import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentWillMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(resp => this.setState({
        transactions: resp
      }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    return event.target.value
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
