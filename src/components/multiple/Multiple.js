import React, { Component } from 'react';
import './Multiple.css';
import parseText from '../parse_text/parseText';

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

      <button className="answer" value ={answer1} onClick={ ()=> this.buttonClick(answer1) } ></button> {answer1}
      {/* replace line breaks with CSS */}
      <br></br>
      <button className="answer" value ={answer2} onClick={ ()=> this.buttonClick(answer2) } ></button> {answer2}
      <br></br>
      <button className="answer" value ={answer3} onClick={ ()=> this.buttonClick(answer3) } ></button> {answer3}
      <br></br>
      <button className="answer" value ={answer4} onClick={ ()=> this.buttonClick(answer4) } ></button> {answer4}
    </div>
    )
  }

};