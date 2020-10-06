import React, { Component } from 'react';
import './Multiple.css';
import parseText from '../parse_text/parseText';
import checkStringLength from '../check_string_length/CheckStringLength'
import Button from '../button/Button';
import Header from '../header/Header.js';

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
    <div className="multiple">
      
      <Header
        number={questionNumber}
        text={questionText}
        // style takes precedence over css sheet
        // adapts as question length is unknown
        style={{
          fontSize: checkStringLength("question", questionText),
          lineHeight: "4.5vh"
        }}
      />

      <div className="multiple-body">
        
        <div className="multiple-item">
          <Button disabled={false} name={"answer1"} value={answer1} onClick={ ()=> this.buttonClick(answer1)} ></Button>
          <p
            style={{fontSize: checkStringLength("answer", answer1)}}
          >{answer1}</p> 
        </div>

        <div className="multiple-item">
          <Button disabled={false} name={"answer2"} value={answer2} onClick={ ()=> this.buttonClick(answer2)} ></Button>
          <p
            style={{fontSize: checkStringLength("answer", answer2)}}
          >{answer2}</p>
        </div>

        <div className="multiple-item">
          <Button disabled={false} name={"answer3"} value={answer3} onClick={ ()=> this.buttonClick(answer3)} ></Button>
          <p
            style={{fontSize: checkStringLength("answer", answer3)}}
          >{answer3}</p>
        </div>

        <div className="multiple-item">
          <Button disabled={false} name={"answer4"} value={answer4} onClick={ ()=> this.buttonClick(answer4)} ></Button>
          <p
            style={{fontSize: checkStringLength("answer", answer4)}}
          >{answer4}</p>
        </div>
         
      </div>
    </div>
    )
  }

};