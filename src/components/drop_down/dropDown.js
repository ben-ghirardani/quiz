import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends Component {

  constructor(props) {
    super(props);
    this.state = { value: "Choose category..." };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  };

  handleSubmit(event) {
    event.preventDefault();
    let categoryID = this.props.getCategoryID(this.state.value);
    this.props.getNumberOfQuestions(categoryID);
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.label}
        <select name={this.props.selectName} value={this.state.value} onChange={this.handleChange} >
          <option value="Choose category...">
            Choose category...
          </option>
          {
            this.props.categories.map((category) => <option key={category.id} value={category.name}> {category.name} </option> )
          }
        </select>
        </label>
        {/* Rename Submit to something more appropriate */}
        <input type="submit" value="Submit" />
      </form>
    )
  };

};