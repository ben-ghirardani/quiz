import React, { Component } from 'react';
import Boolean from '../boolean/Boolean.js';
import Multiple from  '../multiple/Multiple.js';
import Results from '../results/Results.js';

// ***
// *** can this be a functional component, add the questions to an array in state, create a class to display questions one by one
// ***

// class receives the array of questions
export default class GenerateQuestions extends Component {

  constructor(props) {
    super(props);
    this.showQuestion = this.showQuestion.bind(this);
  }

  // is it too fussy to creat an object and pass it to the question component, rather than it's contents directly as props?

  showQuestion(array, index) {
    let question = array[index];
    let result;
    let data = {
      type: question.type,
      questionNumber: question.questionNumber,
      // must be a better way to write the line below!
      question: question.question,
      answers: question.answers,
      correctAnswer: question.correctAnswer,
      increaseArrayIndex: this.props.increaseArrayIndex,
      addToScore: this.props.addToScore
    };
    question.type === "multiple" ? result = <Multiple data={data} /> : result = <Boolean data={data} />
    return result;
  }

  // ternery statement - once arrayIndex reaches array length, show results instead

  render() {
    let index = this.props.arrayIndex;
    let questions = this.props.questions;
    let score = this.props.score;
    return(
      // this.showQuestion(questions, index)
      <div>
        {index < questions.length ? this.showQuestion(questions, index) : <Results quizLength={questions.length} score={score} changeDisplay={this.props.changeDisplay}/>}
      </div>
    )
  }

}