import React, { Component } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import Login from "./Login";
const postURL ="http://localhost:8080/api/register";
var getURL = "";


class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      empid:'',
      password:'',
      emp_name:'',
      designation:'',
      department:'',
      gender:'',
      dob:new Date(),
      doj:new Date(),
      registered:false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
   
    const payload = {
      employeeId:this.state.empid,
      password:this.state.password,
      employeeName:this.state.emp_name,
      designation:this.state.designation,
      department:this.state.department,
      gender:this.state.gender,
      dateOfBirth:this.state.dob,
      dateOfJoining:this.state.doj
    }
    console.log(payload)
    axios.post(postURL, payload)
      .then(res => {
          alert("Employee Registered Successfully!");
          this.setState({
            registered:true
          })
      }).catch(err=>{
        alert("Provide valid Employee Data");
          this.setState({
            registered:false
          })
      })
  }

  onChangeEmpId = e=>{
    console.log(e.target.value)
    this.setState({
      empid:e.target.value
    })
  }
  
  onChangeName = e=>{
    this.setState({
      emp_name:e.target.value
    })
  }

  onChangePassword = e =>{
    console.log(e.target.value)
    this.setState({
      password:e.target.value
    })
  }

  onChangeDept = e =>{
    this.setState({
      department:e.target.value
    })
  }

  onChangeDesignation = e =>{
    this.setState({
      designation:e.target.value
    })
  }

  onChangeGender = e =>{
    this.setState({
      gender:e.target.value
    })
  }

  onChangeDob = e=>{
    this.setState({
      dob:e.target.value
    })
  }

  onChangeDoj = e=>{
    this.setState({
      doj:e.target.value
    })
  }
    render() {
      if(localStorage.getItem('employee')){
        localStorage.removeItem('employee');
      }
      if(this.state.registered){
        return (
          <Navigate to='/' replace ={true}/>
        )
      }
        return (
          <div className="Register" style={{position:"static"}}>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="empid">Employee ID</label>
                <input type="text" name="empid" onChange={this.onChangeEmpId} />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.onChangePassword} />
              </div>
              <div className="input-group">
                <label htmlFor="emp_name">Name</label>
                <input type="text" name="emp_name" onChange={this.onChangeName} />
              </div>
              <div className="input-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" name="designation" onChange={this.onChangeDesignation} />
              </div>
              <div className="input-group">
                <label htmlFor="department">Department</label>
                <input type="text" name="department" onChange={this.onChangeDept}/>
              </div>
              <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" onChange={this.onChangeGender}/>
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" name="dob" onChange={this.onChangeDob}/>
              </div>
              <div className="input-group">
                <label htmlFor="doj">Date of Birth</label>
                <input type="date" name="doj" onChange={this.onChangeDoj}/>
              </div>
              <button className="primary">Register</button>
              <div>
                <Link to="/">
                  <button className="secondary">Log In</button>
                </Link>
              </div>
            </form>
          </div>
        );
      }
}

export default Register;