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

  render() {
    return(
      <div className="boolean">
        <p> {this.props.data.questionNumber} {this.props.data.question} </p>
        <Button disabled={false} name={"True"} value={"True"} onClick={ ()=> this.buttonClick("True")} ></Button> {"True"}

        {/* CSS should remove the need for a br tag */}
        <br></br>
        
        <Button disabled={false} name={"False"} value={"False"} onClick={ ()=> this.buttonClick("False")} ></Button> {"False"}
      </div>
    )
  }

};