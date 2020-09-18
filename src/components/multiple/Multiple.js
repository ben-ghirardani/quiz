import React, { Component } from 'react';
import './Multiple.css';
import parseText from '../parse_text/parseText';
import checkStringLength from '../check_string_length/CheckStringLength'
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
    // checks length of question and returns a font size "multiple-header"
    let stringLength = checkStringLength(questionText);

    return(
    <div className="multiple">
      <div 
        className="multiple-header"
        // takes precedence over css sheet
        // use an inline style to programatically set font size
        style={{
          fontSize: stringLength
        }}
      >
        <p> {questionNumber} {questionText} </p>
      </div>

      <div className="multiple-body">
        
        <div className="multiple-item">
          <Button disabled={false} name={"answer1"} value={answer1} onClick={ ()=> this.buttonClick(answer1)} ></Button>
          <p>{answer1}</p>
        </div>

        <div className="multiple-item">
          <Button disabled={false} name={"answer2"} value={answer2} onClick={ ()=> this.buttonClick(answer2)} ></Button>
          <p>{answer2}</p>
        </div>

        <div className="multiple-item">
          <Button disabled={false} name={"answer3"} value={answer3} onClick={ ()=> this.buttonClick(answer3)} ></Button>
          <p>{answer3}</p>
        </div>

        <div className="multiple-item">
          <Button disabled={false} name={"answer4"} value={answer4} onClick={ ()=> this.buttonClick(answer4)} ></Button>
          <p>{answer4}</p>
        </div>
         
      </div>
    </div>
    )
  }

};