import React, { Component } from 'react';

export default class TryAgain extends Component {

  constructor(props) {
    super(props);
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton() {
    this.props.resetQuiz();
  }

  render() {
    return(
      <div onClick={this.clickButton} >Try Again?</div>
    )
  }

}