import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.createOptions = this.createOptions.bind(this);
  // }

// see this link -> https://stackoverflow.com/questions/31413053/how-to-use-an-array-as-option-for-react-select-component

  render() {
    return(
      <label>
        Choose category
      <select name={this.props.selectName}>
        {
          this.props.categories.map((category) => <option key={category.id} value={category.name}> {category.name} </option> )
        }
      </select>
      </label>
    )
  };

};