import React, { Component } from 'react';
import Boolean from '../question/boolean/Boolean.js';
import Multiple from  '../question/multiple/Multiple.js';

// ***
// *** can this be a functional component, add the questions to an array in state, create a class to display questions one by one
// ***

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
        correctAnswer: item.correctAnswer,
        increaseArrayIndex: this.props.increaseArrayIndex
      }
      item.type === "multiple" ? result = <Multiple data={data}/> : result = <Boolean data={data}/>
      questions.push(result);
    });
    return questions;
  }

  // increaseArrayIndex is now available as propss

  // getQuestions(array) {
  //   let question = array[this.props.arrayIndex];

  //   console.log(question);
  //   // return question;
  //   return <div></div>
  // }

  render() {
    return(
      this.getQuestions(this.props.questions)
    )
  }

}