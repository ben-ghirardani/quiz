import React, { Component } from 'react';
import './Boolean.css';
import Button from '../button/Button';

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

  // code for the question-box and answer-box is repeated across <Multiple/> and <Boolean/>

  render() {
    return(
      <div className="boolean">
        <div className="question-box">
          <p> {this.props.data.questionNumber} {this.props.data.question} </p>
        </div>
        <div className="answer-box">
          <Button disabled={false} name={"True"} value={"True"} onClick={ ()=> this.buttonClick("True")} ></Button> {"True"}        
          <Button disabled={false} name={"False"} value={"False"} onClick={ ()=> this.buttonClick("False")} ></Button> {"False"}
        </div>
      </div>
    )
  }

};