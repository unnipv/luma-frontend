import React from 'react';
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";


var categories = ['table','chair','cupboard'];
const categoryURL ='http://localhost:8080/api/item_category';
const itemMakeURL = 'http://localhost:8080/api/item_make';
const allItemsURL = 'http://localhost:8080/api/all_items';
var itemMakes = ['wood','steel'];
var item = {"item_id":"it01",
"item_description":"abcdefg",
"item_valuation":6666};

function getCategories(){
  axios.get(categoryURL)
      .then(res => {
        categories = res.data;
      })
}

function getMakes(category){
  axios.get(itemMakeURL + "//" + {category})
      .then(res => {
        itemMakes = res.data;
      })
}

function getItem(category, make){
  axios.get(allItemsURL + "//" + {category} + "//" + {make})
      .then(res => {
        item = res.data;
      })

}
getCategories();

class ApplyLoan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empId:'',
      category:'',
      make:'',
      itemID:null,
      description:'',
      itemValue:0,
      isSubmit:false
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMake = this.handleMake.bind(this);
  }

  handleCategory(e) {
    this.setState({category: e.target.value});
    getMakes(this.state.category);
    console.log(this.state.category);
  }

  handleMake(e) {
    this.setState({make: e.target.value});
    getItem(this.state.category, this.state.make);
    this.setState({
      itemID:item["item_id"],
      description:item["item_description"],
      itemValue:item["item_valuation"]
    })
    console.log(this.state.make);
  }

  handleSubmit(event) {
    if(!this.state.itemID){
      alert('Please select item');
    }
    else {
      alert('Applied for a loan for item: ' + this.state.description );
      this.setState({isSubmit:true})
      var payload = {
        "empId":this.state.empId,
        "itemID":this.state.itemID,
      }
      axios.post('loanApplication', payload);
    }
    event.preventDefault();
  }

  optionsMapper(options) {
    return options.map(element => <option value={element}>{element}</option>);
  }

  render() {
    if(this.state.isSubmit){
      return(
        <Navigate to="/home" replace={true} /> 
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label htmlFor="empid">Employee ID</label>
          <input type="text" name="empid" />
        </div>
        <div className="input-group">
          <label htmlFor="category">Item Category
            <select value={this.state.category} onChange={this.handleCategory} >
              {this.optionsMapper(categories)}
            </select>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="make">Item Make
            <select value={this.state.make} onChange={this.handleMake} >
              {this.optionsMapper(itemMakes)}
            </select>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="description">Item Description</label>
          <input type="text" name="description" value={this.state.description} readOnly />
        </div>
        <div className="input-group">
          <label htmlFor="itemValue">Item Value</label>
          <input type="text" name="itemValue" value={this.state.itemValue} readOnly/>
        </div>
        <button className = "primary" type="submit">Submit</button>
      </form>
    );
  }
}

export default ApplyLoan;

