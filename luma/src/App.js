import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ApplyLoan from './ApplyLoan';

// import ItemsPurchased from './itemspur';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      login:false,
      page:[]
    }
  }
  componentDidMount(){
    var loginPage = [];
    loginPage.push(<Login appContext={this} key={"login-screen"}/>);
    this.setState({
        page:loginPage
    })

    //testing sadnbox code
    // var applyLoanPage = [];
    // applyLoanPage.push(<ApplyLoan appContext={this} key={"ApplyLoan"}/>);
    // this.setState({
    //   page:applyLoanPage
    // })

  };
  render() {
    return (
      <div className="App">
        <Header title="Loan User Management Application" subtitle="Team 4" />
        {this.state.page}
        <Footer note="Loan User Management Application" />
      </div>
    );
  }
}

export default App;