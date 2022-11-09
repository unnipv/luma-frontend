import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';

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
    if (!localStorage.getItem('employee')){
        return <Navigate to="/" replace = {true}/>
    }
    return (
      <div>
        <h1>User Dashboard</h1>
        <div>
          <Link to="/loans">
            <button className="secondary">View Loans</button>
          </Link>
        </div>
        <div>
          <Link to="/applyloan">
            <button className="secondary">Apply for Loan</button>
          </Link>
        </div>
        <div>
          <Link to="/items">
            <button className="secondary">View items purchased</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Dashboard;
