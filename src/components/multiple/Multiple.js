import React, { Component } from 'react';
import './Multiple.css';
import parseText from '../parse_text/parseText';
import Button from '../button/Button';

export default class Multiple extends Component {

  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
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

    let questionNumber = this.props.data.questionNumber;
    let questionText = parseText(this.props.data.question);
    let answer1 = parseText(this.props.data.answers[0]);
    let answer2 = parseText(this.props.data.answers[1]);
    let answer3 = parseText(this.props.data.answers[2]);
    let answer4 = parseText(this.props.data.answers[3]);

    return(
    // will need to make the container a proper component not a fragment in order to add Framer Motion stylings
    <div className="multiple">
      <p> {questionNumber} {questionText} </p>
      {/* have a circular button, with the text to the right, buttons arranged vertically */}

      {/* place the text in a html element so it can styled */}
      <Button disabled={false} name={"answer1"} value={answer1} onClick={ ()=> this.buttonClick(answer1)} ></Button> {answer1}
      {/* replace line breaks with CSS */}
      <br></br>
      <Button disabled={false} name={"answer2"} value={answer2} onClick={ ()=> this.buttonClick(answer2)} ></Button> {answer2}
      <br></br>
      <Button disabled={false} name={"answer3"} value={answer3} onClick={ ()=> this.buttonClick(answer3)} ></Button> {answer3}
      <br></br>
      <Button disabled={false} name={"answer4"} value={answer4} onClick={ ()=> this.buttonClick(answer4)} ></Button> {answer4}
    </div>
    )
  }

};