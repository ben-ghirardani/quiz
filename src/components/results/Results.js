import React, { Component } from 'react';
import TryAgain from '../try_again/TryAgain.js'
import './Results.css';

export default class Results extends Component {

  render() {
    return(
      <div className="results">
        {`You scored ${this.props.score} out of ${this.props.quizLength}`}
        <TryAgain changeDisplay={this.props.changeDisplay} />
      </div>
    )
  }

}