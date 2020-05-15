import React, { Component } from 'react';
import './DropDown.css';

// change to a class that taks in props -> array of categories and name for the select (so the component can be re-used)

export default class DropDown extends Component {

  constructor(props) {
    super(props);
    this.createOptions = this.createOptions.bind(this);
  }

  createOptions(array) {
    let options = array.forEach(option => 
      <option value={option.name}> {option.name} </option>
    )
    return options;
  };

// Test data below renders, why does my version not render?

// see this link -> https://stackoverflow.com/questions/31413053/how-to-use-an-array-as-option-for-react-select-component

  render() {
    return(
      <label>
        Choose category
      <select name={this.props.selectName}>
        {this.createOptions(this.props.categories)}
      </select>
      </label>
    )
  };

};


      

      //       <label>
      //   Choose category
      // <select name="test">
      //   <option value="Option1">Option1</option>
      //   <option value="Option2">Option2</option>
      //   <option value="Option3">Option3</option>
      // </select>
      // </label>