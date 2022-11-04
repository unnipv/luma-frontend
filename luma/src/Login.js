import React, { Component } from "react";
import axios from 'axios';
class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      userid:'',
      password:'',
      loginmessage:'',
      isLogin:true
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.userid.value);
    var payload = {
      "userid":this.state.userid,
      "password":this.state.password
    }
    axios.post('login', payload)
    if (!e.target.userid.value) {
      alert("User ID is required");
    } else if (!e.target.userid.value) {
      alert("Valid User ID is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.userid.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.userid.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong userid or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();
    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="Login">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="userid">User ID</label>
            <input type="text" name="userid" />
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
    );
  }
}

export default Login;
