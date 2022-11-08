import React, { Component } from 'react'
import LoanService from './LoanService';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

var emp = localStorage.getItem('employee');

class LoanCardsAvailed extends Component {

  constructor(props){
    super(props);
    this.state = {
        loanCards: []
    }
  }

  componentDidMount(){
    var empID = emp.employee_id;
    // console.log(empID);

    LoanService.getLoanDetails(empID).then((res) => {
        this.setState({
            loanCards: res.data
        })
    })
  }

  render() {
    return (
      <div>
        <h1>Loan Cards Availed</h1>

        <div>
            <Grid style={this.gridStyle}>
                EMPLOYEE ID: {emp.employee_id}
            </Grid>
            <Grid style={this.gridStyle}>
                DESIGNATION: {emp.designation}
            </Grid>
            <Grid style={this.gridStyle}>
                DEPARTMENT: {emp.department}
            </Grid>           
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Loan Id</TableCell>
                    <TableCell>Loan type</TableCell>
                    <TableCell>Duration (in years)</TableCell>
                    <TableCell>Card issue date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.loanCards.map((row) => (
                    <TableRow
                    key={row.issue_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.loan_id}
                    </TableCell>
                    <TableCell>{row.loan_type}</TableCell>
                    <TableCell>{row.duration_in_years}</TableCell>
                    <TableCell>{row.card_issue_date}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
  }
}

export default LoanCardsAvailed;

/*<form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group" style={{margin: "5px"}}>
            <label htmlFor="empid">Employee ID</label>
            <input type="text" name="empid" />
          </div>
          <button className="primary">Submit</button>
        </form>*/