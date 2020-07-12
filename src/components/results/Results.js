import React, { Component } from 'react';
import TryAgain from '../try_again/TryAgain.js'

export default class Results extends Component {

  render() {
    return(
      <div>
        {`You scored ${this.props.score} out of ${this.props.quizLength}`}
        <TryAgain changeDisplay={this.props.changeDisplay} />
      </div>
    )
  }

}