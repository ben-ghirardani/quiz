import React, { Component } from 'react';
import './LandingPage.css';

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
      <div className="landing-page" onClick={this.clickButton} >Quiz!</div>
    )
  }

}