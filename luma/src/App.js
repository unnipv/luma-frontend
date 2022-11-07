import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      login:false,
      page:[],
    }
  }
  componentWillMount(){
    var loginPage = [];
    // var registerPage = [];
    loginPage.push(<Login appContext={this} key={"login-screen"}/>);
    // registerPage.push(<Register appContext={this} key={"register-screen"}/>)
    this.setState({
        page:loginPage
    })
    // if (this.props.loginState){
    //     this.setState({
    //         page:loginPage
    //           })
    // }
    // else {
    //     this.setState({
    //         page:registerPage
    //     })
    // }
  };
  render() {
    return (
      <div className="App">
        {this.state.page}
      </div>
    );
  }
}

export default App;