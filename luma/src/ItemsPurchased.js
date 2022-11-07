import React, { Component } from 'react'
import ItemService from './service/ItemService';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
  
var postURL = "";
// var getURL = "";

class ItemsPurchased extends Component {

  constructor(props){
    super(props);
    this.state = {
        items: [],
        empDesignation: "",
        empDepartment: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.empid.value);
    var payload = {
      "empid":this.state.empid,
    }
    axios.post(postURL, payload);

    if (!e.target.empid.value) {
        alert("Employee ID is required");
    }

    ItemService.getDetails().then((res) => {
        this.setState({
            items: res.data.items,
            empDesignation: res.data.empDesignation,
            empDepartment: res.data.empDepartment
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
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group" style={{margin: "5px"}}>
            <label htmlFor="empid">Employee ID</label>
            <input type="text" name="empid" />
          </div>
          <button className="primary">Submit</button>
        </form>

        <div>
            <Grid style={this.gridStyle}>
                DESIGNATION: {this.state.empDesignation}
            </Grid>
            <Grid style={this.gridStyle}>
                DEPARTMENT: {this.state.empDepartment}
            </Grid>            
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Issue_id</TableCell>
                    <TableCell>Item Description</TableCell>
                    <TableCell>Item make</TableCell>
                    <TableCell>Item category</TableCell>
                    <TableCell>Item valuation</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
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