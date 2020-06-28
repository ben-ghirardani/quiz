import React, { Component } from 'react';

export default class Boolean extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // should state sit here for the result of each question? Or raise up?
      chosenAnswer: null
    }
  }

  render() {
    return(
      <form>
        <p> {this.props.data.question} </p>
        <input type="radio" name="boolean" value ="True"/>
        <input type="radio" name="boolean" value="False"/>
      </form>
    )
  }

};

// let question = {
//     type: item.type,
//     questionNumber: number,
//     question: item.question,
//     answers: fisherYatesShuffle(item.incorrect_answers.concat(item.correct_answer)),
//     correctAnswer: item.correct_answer
//   };