import React, { Component } from 'react';

export default class Boolean extends Component {
  
  constructor(props) {
    super(props);
    this.clickNext = this.buttonClick.bind(this);
  }

  buttonClick(answer) {
    let correctAnswer = this.props.data.correctAnswer;
    if (answer === correctAnswer) {
      this.props.data.addToScore();
      this.props.data.increaseArrayIndex();
    } else if (answer !== correctAnswer) {
      this.props.data.increaseArrayIndex();
    }
  }

  render() {
    return(
      <>
        <p> {this.props.data.questionNumber} {this.props.data.question} </p>
        <button name="True" value ="True" onClick={()=> this.buttonClick("True") } ></button> {"True"}
        {/* CSS should remove the need for a br tag */}
        <br></br>
        <button name="False" value="False" onClick={()=> this.buttonClick("False") } ></button> {"False"}
      </>
    )
  }

};