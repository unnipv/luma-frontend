import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ApplyLoan from './ApplyLoan';
import Dashboard from './Dashboard';
import Register from './Register';
import LoanCardsAvailed from './LoanCardsAvailed';
import ItemsPurchased from './ItemsPurchased';

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
    //testing sadnbox code
    // var applyLoanPage = [];
    // applyLoanPage.push(<ApplyLoan appContext={this} key={"ApplyLoan"}/>);
    // this.setState({
    //   page:applyLoanPage
    // })
  render(){
    return (
      <div className="App">
      <Header title="Loan User Management Application" subtitle="Team 4" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/applyloan" element={<ApplyLoan />} ></Route>
          <Route path="/home" element={<Dashboard />} ></Route>
          <Route path="/loans" element={<LoanCardsAvailed />} ></Route>
          <Route path="/items" element={<ItemsPurchased />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer note="Loan User Management Application" />
    </div>
    );
  }
}

export default App;