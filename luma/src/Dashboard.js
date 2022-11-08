import React, { Component } from 'react'

class Dashboard extends Component {

  handleClick1 = e => {
    e.preventDefault();
    alert("Goes to Loan cards availed page"); // add route using history
  }  

  handleClick2 = e => {
    e.preventDefault();
    alert("Goes to Apply for loan page"); // add route using history
  }  

  handleClick3 = e => {
    e.preventDefault();
    alert("Goes to Items purchased page");  // add route using history
  }  

  render() {
    return (
      <div>
        <h1>User Dashboard</h1>
        <button className="secondary" onClick={this.handleClick1}>
          View Loans
        </button>
        <button className="secondary" onClick={this.handleClick2}>
          Apply for loan
        </button>
        <button className="secondary" onClick={this.handleClick3}>
          View items purchased
        </button>
      </div>
    )
  }
}

export default Dashboard;
