import React, { Component } from "react";
import axios from 'axios';
import App from "./App";
import Register from "./Register";

var getURL = "";
class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      userid:'',
      password:'',
      loginmessage:'',
      isLogin:false,
      registerButton:false,
      registerPage:[]
    }
  }
  
  changeState = (loginState) => {  
    this.setState({isLogin:loginState}); 
       }; 
  
  handleClick = e => {
    e.preventDefault();
    var registerPage =[];
    // alert("Goes to registration page");
    registerPage.push(<Register appContext={this.props.appContext} key={"login-screen"}/>)
    this.setState({
      registerPage:registerPage,
      registerButton:true
    })
  };     

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.userid.value);
    this.setState({
      userid:e.target.userid.value,
      password:e.target.password.value
    })
    var payload = {
      "userid":this.state.userid,
      "password":this.state.password
    }

    // axios.post('login', payload)
    // axios.get(getURL)
    //   .then(res => {
    //     const loginState = res.data;
    //     this.changeState(loginState);
    //   })

    if (!e.target.userid.value) {
      alert("User ID is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (this.state.isLogin) {
      alert("Successfully logged in");
      e.target.userid.value = "";
      e.target.password.value = "";
    } else {
      this.changeState(false);
      alert("Wrong userid or password combination");
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
