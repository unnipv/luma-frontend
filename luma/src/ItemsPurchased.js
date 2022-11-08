import React, { Component } from 'react'
import ItemService from './service/ItemService';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

class ItemsPurchased extends Component {

  constructor(props){
    super(props);
    this.state = {
        items: []
    }
  }

  componentDidMount(){

    var empID = localStorage.getItem('empId');

    ItemService.getDetails(empID).then((res) => {
        // console.log(res.data);
        this.setState({
            items: res.data
        })
    })
  }

  gridStyle = {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    color: "#676767",
    marginBottom: "10px"
  }

  render() {
    return (
      <div>
        <h1>Items Purchased</h1>

        <div>
            <Grid style={this.gridStyle}>
                EMPLOYEE ID: {localStorage.getItem('empId')}
            </Grid>
            <Grid style={this.gridStyle}>
                DESIGNATION: {localStorage.getItem('designation')}
            </Grid>
            <Grid style={this.gridStyle}>
                DEPARTMENT: {localStorage.getItem('department')}
            </Grid>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Issue Id</TableCell>
                    <TableCell>Item Description</TableCell>
                    <TableCell>Item make</TableCell>
                    <TableCell>Item category</TableCell>
                    <TableCell>Item valuation</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.items.map((row) => (
                    <TableRow
                    key={row.issue_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.issue_id}
                    </TableCell>
                    <TableCell>{row.item_description}</TableCell>
                    <TableCell>{row.item_make}</TableCell>
                    <TableCell>{row.item_category}</TableCell>
                    <TableCell>{row.item_valuation}</TableCell>
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

export default ItemsPurchased;

/*<form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group" style={{margin: "5px"}}>
            <label htmlFor="empid">Employee ID</label>
            <input type="text" name="empid" />
          </div>
          <button className="primary">Submit</button>
        </form>*/