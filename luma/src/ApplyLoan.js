import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import { makeStyles } from '@material-ui/core/styles';

const categoryURL = 'http://localhost:8080/api/item_category';
const itemMakeURL = 'http://localhost:8080/api/item_make';
const allItemsURL = 'http://localhost:8080/api/all_items';
const applyLoanUrl = 'http://localhost:8080/api/applyforloan'



function ApplyLoan() {
  const navigate = useNavigate();
  const [categories, setcategories] = useState([]);
  const [makes, setmakes] = useState([]);
  const [items, setitems] = useState([]);
  const [category, setCategory] = useState('');
  const [make, setmake] = useState('');
  const [item, setitem] = useState({
    itemId: null,
    itemDescription: '',
    itemValuation: '',
    issueStatus: ''
  });



  useEffect(() => {
    axios.get(categoryURL)
      .then(res => {
        setcategories(res.data);
        setCategory(res.data[0]);
        console.log(res.data[0])
      })
  }, [])

  useEffect(() => {
    console.log(itemMakeURL + "/" + category)
    axios.get(itemMakeURL + "/" + category)
      .then(res => {
        setmakes(res.data)
        setmake(res.data[0])
      })
  }, [category])

  useEffect(() => {
    console.log(allItemsURL + "/" + category + "/" + make)
    axios.get(allItemsURL + "/" + category + "/" + make)
      .then(res => {
        setitems(res.data)
        console.log(res.data)
        setitem({
          itemId: res.data[0].item_id,
          itemDescription: res.data[0].item_description,
          itemValuation: res.data[0].item_valuation,
          issueStatus: res.data[0].issue_status
        })
      })
  }, [make])



  function handleSubmit(event) {
    event.preventDefault();
    if (!item.itemId) {
      alert('Please select item');
    }
    else {
      var payload = {
        "employeeId": JSON.parse(localStorage.getItem('employee')).employeeId,
        "item_id": item.itemId,
        "item_category": category
      }
      console.log(payload)
      axios.post(applyLoanUrl, payload)
        .then(res => {
          alert('Applied for a loan for item: ' + item.itemDescription);
          navigate('/home')
        }

        ).catch(err => {
          alert("Error in processing Loan");
          navigate('/applyforloan')
        }

        )
    }
  }

  function optionsMapper(options) {
    console.log(options)
    return options.map(element => <option value={element}>{element}</option>);
  }

  function optionsMapperObject(options) {
    console.log(options)
    return options.map(element => <option value={element}>{element.itemDescription}</option>);
  }

  function handleCategory(e) {
    console.log(e.target.value);
    setCategory(e.target.value);
    setmake(makes[0])
  }

  function handleMake(e) {
    console.log(e.target.value);
    setmake(e.target.value);
  }

  function handleItemSelect(e, item_value) {
    console.log(item_value)
    setitem({
      itemId: item_value.item_id,
      itemDescription: item_value.item_description,
      itemValuation: item_value.itemValuation,
      issueStatus: item_value.issueStatus
    })
  }

  return (
    <div style={{ height: "500px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{display:"grid"}}>
          <div className="input-group">
            <label htmlFor="empid">Employee ID</label>
            <input type="text" name="empid" value={JSON.parse(localStorage.getItem('employee')).employeeId} readOnly />
          </div>
          <div className="input-group" style={{display:"flex"}}>
            <label htmlFor="category">Item Category
              <select value={category} onChange={handleCategory} >
                {optionsMapper(categories)}
              </select>
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="make">Item Make
              <select value={make} onChange={handleMake} >
                {optionsMapper(makes)}
              </select>
            </label>
          </div>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item Id</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Item Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow onClick={(e) => handleItemSelect(e, row)}
                    key={row.item_id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 }, '&.MuiTableRow-hover': {
                        '&:hover': {
                          backgroundColor: 'orange',
                        }
                      }
                    }} hover
                  >
                    <TableCell component="th" scope="row">
                      {row.item_id}
                    </TableCell>
                    <TableCell>{row.item_description}</TableCell>
                    <TableCell>{row.item_valuation}</TableCell>
                    <TableCell>{row.issue_status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button className="primary" type="submit" style={{ marginBottom: "50px" }}>Apply for Loan</button>
        </div>

      </form>
    </div>

  );
}

export default ApplyLoan;

