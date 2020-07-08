import React, { Component } from 'react';

export default class Results extends Component {

  render() {
    return(
      <div>
        {`You scored ${this.props.score} out of ${this.props.quizLength}`}
      </div>
    )
  }

}