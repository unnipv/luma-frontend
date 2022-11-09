import React, { Component } from 'react'
import ItemService from './ItemService';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


class ItemsPurchased extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: new Set(),
      isfilter: false,
      category: 'ALL',
      emp : JSON.parse(localStorage.getItem('employee'))
    }
  }

  componentWillMount() {
    
    var empID = this.state.emp.employeeId;

    ItemService.getDetails(empID).then((res) => {
      // console.log(res.data);
      this.setState({
        items: res.data,
        categories: new Set(res.data.map(cat => cat.item_category))
      })
    }).catch(err=>{
        console.log(err)
    })
  }

  filterCategory = e => {
    if (e.target.value === "ALL") {
      this.setState({
        isfilter:false,
        category:"ALL"
      })
    }
    else{
      this.setState({
        isfilter:true,
        category:e.target.value
      })
    }
    console.log(e.target.value)
  }

  gridStyle = {
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    color: "#676767",
    marginBottom: "10px"
  }

  divStyle = {
    height: "500px"
  }

  render() {
    return (
      <div style={this.divStyle}>
        <h1>Items Purchased</h1>

        <div>
          <Grid style={this.gridStyle}>
            EMPLOYEE ID: {this.state.emp.employeeId}
          </Grid>
          <Grid style={this.gridStyle}>
            DESIGNATION: {this.state.emp.designation}
          </Grid>
          <Grid style={this.gridStyle}>
            DEPARTMENT: {this.state.emp.department}
          </Grid>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Issue Id</TableCell>
                  <TableCell>Item Description</TableCell>
                  <TableCell>Item make</TableCell>
                  <TableCell>
                    <select value={this.state.category} onChange={this.filterCategory}>
                      <option value={"ALL"}>{"ALL"}</option>
                      {Array.from(this.state.categories).map(cat => <option value={cat} key={cat}>{cat}</option>)}
                    </select>
                    Item category</TableCell>
                  <TableCell>Item valuation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.isfilter ?
                  this.state.items.map((row) => {
                    if (row.item_category === this.state.category) {
                      return <TableRow
                        key={row.issue_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row.issue_id}
                        </TableCell>
                        <TableCell>{row.item_description}</TableCell>
                        <TableCell>{row.item_make}</TableCell>
                        <TableCell>{row.item_category}</TableCell>
                        <TableCell>{row.item_valuation}</TableCell>
                      </TableRow>
                    }
                  })  
                  :
                  this.state.items.map((row) => (
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
                ))
                }

              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>
    )
  }
}

export default ItemsPurchased;