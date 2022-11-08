import React, { Component } from "react";
import { Navigate, Link } from "react-router-dom";
import Login from "./Login";
var postURl ="";
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
      loginPage:[],
      loginClicked:false,
      isRegistered:false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.empid.value);
    this.setState({
      empid:e.target.empid.value,
      password:e.target.password.value,
      emp_name:e.target.emp_name.value,
      designation:e.target.designation.value,
      department:e.target.department.value,
      gender:e.target.gender.value,
      dob:e.target.dob.value,
      doj:e.target.doj.value,
      isRegistered:true
    })
    var payload = {
      employeeId:this.state.empid,
      password:this.state.password,
      employeeName:this.state.emp_name,
      designation:this.state.designation,
      department:this.state.department,
      gender:this.state.gender,
      dateOfBirth:this.state.dob,
      dateOfJoining:this.state.doj
    }

    // axios.post(postURL, payload)
    // axios.get(getURL)
    //   .then(res => {
    //     const loginState = res.data;
    //     this.changeState(loginState);
    //   })
  }

    render() {
      if(this.state.isRegistered){
        return(
          <Navigate to="/" replace={true} /> 
          );
      }
        return (
          <div className="Register">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="empid">Employee ID</label>
                <input type="text" name="empid" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
              </div>
              <div className="input-group">
                <label htmlFor="emp_name">Name</label>
                <input type="text" name="emp_name" />
              </div>
              <div className="input-group">
                <label htmlFor="designation">Designation</label>
                <input type="text" name="designation" />
              </div>
              <div className="input-group">
                <label htmlFor="department">Department</label>
                <input type="text" name="department" />
              </div>
              <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" name="dob" />
              </div>
              <div className="input-group">
                <label htmlFor="doj">Date of Birth</label>
                <input type="date" name="doj" />
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