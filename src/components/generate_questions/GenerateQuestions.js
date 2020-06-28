import React, { Component } from 'react';
import Boolean from '../question/boolean/Boolean.js';
import Multiple from  '../question/multiple/Multiple.js';


// class receives the array of questions
export default class GenerateQuestions extends Component {

  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions(array) {
    let questions = [];
    array.forEach(item => {
      let result;
      // better name for object below?
      let data = {
        type: item.type,
        questionNumber: item.questionNumber,
        question: item.question,
        answers: item.answers,
        correctAnswer: item.correctAnswer 
      }
      item.type === "multiple" ? result = <Multiple data={data}/> : result = <Boolean data={data}/>
      questions.push(result);
    });
    return questions;
  }

  render() {
    return(
      this.getQuestions(this.props.questions)
    )
  }

}