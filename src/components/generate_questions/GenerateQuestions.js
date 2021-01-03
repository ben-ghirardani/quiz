import React, { Component } from 'react';
import Boolean from '../boolean/Boolean.js';
import Multiple from  '../multiple/Multiple.js';
import Results from '../results/Results.js';

// class receives the array of questions
export default class GenerateQuestions extends Component {

  constructor(props) {
    super(props);
    this.showQuestion = this.showQuestion.bind(this);
  }

  showQuestion(array, index) {
    let question = array[index];
    let result;
    let data = {
      type: question.type,
      questionNumber: question.questionNumber,
      question: question.question,
      answers: question.answers,
      correctAnswer: question.correctAnswer,
      increaseArrayIndex: this.props.increaseArrayIndex,
      addToScore: this.props.addToScore
    };
    question.type === "multiple" ? result = <Multiple data={data} /> : result = <Boolean data={data} />
    return result;
  }

  render() {
    let index = this.props.arrayIndex;
    let questions = this.props.questions;
    let score = this.props.score;
    return(
      <div>
        {index < questions.length ? this.showQuestion(questions, index) : <Results quizLength={questions.length} score={score} resetQuiz={this.props.resetQuiz}/>}
      </div>
    )
  }

}