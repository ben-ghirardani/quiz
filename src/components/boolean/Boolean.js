import React, { Component } from 'react';
import './Boolean.css';
import parseText from '../parse_text/parseText.js';
import checkStringLength from '../check_string_length/CheckStringLength';
import Header from '../header/Header.js';
import setFontSize from '../set_font_size/SetFontSize.js'

export default class Boolean extends Component {
  
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

    return(
      <div className="boolean">

      <Header
        number={questionNumber}
        text={questionText}
        // style takes precedence over css sheet
        // adapts as question length is unknown
        style={{
          fontSize: setFontSize(checkStringLength(questionText)),
          lineHeight: "4.5vh"
        }}
      /> 

        <div className="boolean-body">

          <div className="boolean-item">
            <p onClick={ ()=> this.buttonClick("True")}>
              True
            </p>        
          </div>

          <div className="boolean-item">
            <p onClick={ ()=> this.buttonClick("False")} >
              False
            </p>        
          </div>

        </div>
      </div>
    )
  }

};