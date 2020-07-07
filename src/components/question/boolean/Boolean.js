import React, { Component } from 'react';

export default class Boolean extends Component {
  
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
    return(
      <>
      <form>
        <p> {this.props.data.questionNumber} {this.props.data.question} </p>
        <input type="radio" name="boolean" value ="True" onClick={()=> this.setState({answer: "True"}) } /> True
        <input type="radio" name="boolean" value="False" onClick={()=> this.setState({answer: "False"}) } /> False
      </form>
      <button onClick={this.clickNext} >Next</button>
      </>
    )
  }

};