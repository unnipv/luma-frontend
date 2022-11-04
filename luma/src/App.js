import React, { Component } from 'react';
import './App.css';
import Login from './Login';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Login appContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;