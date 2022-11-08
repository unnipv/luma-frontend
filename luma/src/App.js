import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ApplyLoan from './ApplyLoan';
import Dashboard from './Dashboard';

// import ItemsPurchased from './itemspur';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      login:false,
      page:[],
      dashboard:[]
    }
  }
  componentDidMount(){
    var loginPage = [];
    loginPage.push(<Login appContext={this} key={"login-screen"}/>);
    var dashboard = [];
    dashboard.push(<Dashboard appContext={this} key={"dashboard"}/>);
    this.setState({
      page:loginPage,
      dashboard:dashboard
  })
    //testing sadnbox code
    // var applyLoanPage = [];
    // applyLoanPage.push(<ApplyLoan appContext={this} key={"ApplyLoan"}/>);
    // this.setState({
    //   page:applyLoanPage
    // })

  };
  render() {
    var isLoggedIn = localStorage.getItem('employee');
    return (
      (isLoggedIn === null ? ( 
      <div className="App">
        <Header title="Loan User Management Application" subtitle="Team 4" />
        {this.state.page}
        <Footer note="Loan User Management Application" />
      </div>
      ) : (
        <div className="App">
        <Header title="Loan User Management Application" subtitle="Team 4" />
        {this.state.dashboard}
        <Footer note="Loan User Management Application" />
      </div>
      )
      )
    );
  }
}

export default App;