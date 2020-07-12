import React, { Component } from 'react';

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    this.props.changeDisplay("Category")
  }

  render() {
    return(
      <div onClick={this.clickButton} >Quiz!</div>
    )
  }

}