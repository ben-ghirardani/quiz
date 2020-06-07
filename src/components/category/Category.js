import React, { Component } from 'react';
import './Category.css';

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  };

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.value === "") {
      return
    } else {
      let categoryID = this.props.getCategoryID(this.state.value);
      this.props.getNumberOfQuestions(categoryID);
      this.props.changeDisplay("Difficulty");
    }
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.label}
        <select name={this.props.selectName} value={this.state.value} onChange={this.handleChange} >
          {/* <option value="Choose category..."> */}
          <option value="" hidden>
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