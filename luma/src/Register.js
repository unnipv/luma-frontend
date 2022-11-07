import React, { Component } from "react";
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
      dob:''
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
      dob:e.target.dob.value
    })
    var payload = {
      empid:this.state.empid,
      password:this.state.password,
      emp_name:this.state.emp_name,
      designation:this.state.designation,
      department:this.state.department,
      gender:this.state.gender,
      dob:this.state.dob
    }

    // axios.post(postURL, payload)
    // axios.get(getURL)
    //   .then(res => {
    //     const loginState = res.data;
    //     this.changeState(loginState);
    //   })
  }

    render() {
        return (
          <div className="Register">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="register">Employee ID</label>
                <input type="text" name="empid" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Name</label>
                <input type="password" name="emp_name" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Designation</label>
                <input type="password" name="designation" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Department</label>
                <input type="password" name="department" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Gender</label>
                <input type="password" name="gender" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Date of Birth</label>
                <input type="date" name="dob" />
              </div>
              <button className="primary">Register</button>
            </form>
          </div>
        );
      }
}

export default Register;