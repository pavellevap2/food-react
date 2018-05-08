import React from 'react'

class VotesTable extends React.Component {
  componentDidMount() {
    this.props.takeVotesTable()
  }

  render() {
    return (
      <div>
        <h1>тест</h1>
      </div>
    )
  }
}

export default VotesTable
