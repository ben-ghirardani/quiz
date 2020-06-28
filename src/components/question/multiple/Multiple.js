import React, { Component } from 'react';

export default class Multiple extends Component {
  
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
        <input type="radio" name="multiple" value ={this.props.data.answers[0]}/>
        <input type="radio" name="multiple" value ={this.props.data.answers[1]}/>
        <input type="radio" name="multiple" value ={this.props.data.answers[2]}/>
        <input type="radio" name="multiple" value ={this.props.data.answers[3]}/>
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