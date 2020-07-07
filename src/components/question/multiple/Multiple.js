import React, { Component } from 'react';

export default class Multiple extends Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: null
    };
    this.clickNext = this.clickNext.bind(this);
  }

  clickNext() {
    let answer = this.state.answer;
    let correctAnswer = this.props.data.correctAnswer;
    if(answer === null) {
      // add error handling. e.g. answers and radio button flash to prompt selection
      return
    } else if (answer === correctAnswer) {
      this.props.data.addToScore();
      this.props.data.increaseArrayIndex();
    } else if (answer !== correctAnswer) {
      this.props.data.increaseArrayIndex();
    } else return
  }

  render() {

    let answer1 = this.props.data.answers[0];
    let answer2 = this.props.data.answers[1];
    let answer3 = this.props.data.answers[2];
    let answer4 = this.props.data.answers[3];

    return(
      <>
      <form>
        <p> {this.props.data.questionNumber} {this.props.data.question} </p>
        <input type="radio" name="multiple" value ={answer1} onClick={ ()=> this.setState({answer: answer1}) } /> {answer1} 
        <input type="radio" name="multiple" value ={answer2} onClick={ ()=> this.setState({answer: answer2}) } /> {answer2}
        <input type="radio" name="multiple" value ={answer3} onClick={ ()=> this.setState({answer: answer3}) } /> {answer3}
        <input type="radio" name="multiple" value ={answer4} onClick={ ()=> this.setState({answer: answer4}) } /> {answer4}
      </form>
      <button onClick={this.clickNext} >Next</button>
      </>
    )
  }

};