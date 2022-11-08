import React, { Component } from "react";
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
      registerButton:false,
      registerPage:[],
      employee:[]
    }
  }
  
  changeState = (loginState, employee) => {  
    this.setState({isLogin:loginState, employee:employee}); 
       }; 
  
  handleClick = e => {
    e.preventDefault();
    var registerPage =[];
    // alert("Goes to registration page");
    registerPage.push(<Register appContext={this.props.appContext} key={"login-screen"}/>)
    this.setState({
      registerPage:registerPage,
      registerButton:true,
    })
  };     

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.empId.value);
    this.setState({
      empId:e.target.empId.value,
      password:e.target.password.value
    })
    var payload = {
      "empId":this.state.empId,
      "password":this.state.password
    }

    axios.post('login', payload)
    axios.get(getURL)
      .then(res => {
        if(res.status === 200){
          const loginState = true;
          this.changeState(loginState, res.data);
        }
      })

    if (!e.target.empId.value) {
      alert("Emp ID is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (this.state.isLogin) {
      alert("Successfully logged in");
      localStorage.setItem('employee', this.state.employee)
      e.target.empId.value = "";
      e.target.password.value = "";
    } else {
      this.changeState(false);
      alert("Wrong empId or password combination");
      this.handleClick(e);
    }
  };

  render() {
    var isRegisterClicked = this.state.registerButton;
    return (
      (!isRegisterClicked ? (
      <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="empId">Employee ID</label>
            <input type="text" name="empId" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Log In</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Register
        </button>
      </div>
      ) : (
      <div className="Register">
      {this.state.registerPage}
      </div>
    )
    )
    );
  }
}

export default Login;
