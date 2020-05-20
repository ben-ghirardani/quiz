import React, { Component } from 'react';
import './DropDown.css';

export default class DropDown extends Component {

  constructor(props) {
    super(props);
    this.state = { value: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  };

  handleSubmit(event) {
    event.preventDefault();
    // something to make sure handleChange has completed, then send data to App.js
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.label}
        <select name={this.props.selectName} onChange={this.handleChange} >
          {/* make the first option in the drop-down be "default" */}
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