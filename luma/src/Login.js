import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import App from "./App";
import Register from "./Register";
import applyLoan from "./ApplyLoan";

var getURL = "";

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      empId:'',
      password:'',
      loginmessage:'',
      isLogin:false,
      employee:[]
    }
  }
  
  changeState = (loginState, employee) => {  
    this.setState({isLogin:loginState, employee:employee}); 
       }; 
  
  handleIdChange = e=>{
    this.setState({
      empId: e.target.value
    })

  }

  handlePasswordChange = e=>{
    this.setState({
      password: e.target.value
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      empId:e.target.empId.value,
      password:e.target.password.value
    })
    console.log(this.state.empId);
    var payload = {
      "employeeId":this.state.empId,
      "password":this.state.password
    }

    axios.post('http://localhost:8080/api/login', payload)
      .then(res => {
        if(res.status === 200){
          const loginState = true;
          console.log(res.data)
          this.changeState(loginState, res.data);
        }
      })

    if (!e.target.empId.value) {
      alert("Emp ID is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (this.state.isLogin) {
      alert("Successfully logged in");
      localStorage.setItem('employee', this.state.employee);
    } else {
      this.changeState(false);
      alert("Wrong empId or password combination");
    }
  };

  render() {
    if (this.state.isLogin){
      return(
      <Navigate to="/home" replace={true} /> 
      );
    }
    return (
      <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="empId">Employee ID</label>
            <input type="text" name="empId" onChange={this.handleIdChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.handlePasswordChange} />
          </div>
          <button className = "primary" type="submit">Log In</button>
        </form>
        <div>
          <Link to="register">
            <button className="secondary">Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
