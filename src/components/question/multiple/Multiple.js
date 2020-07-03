import React, { Component } from 'react';

export default class Multiple extends Component {

  constructor(props) {
    super(props);
    this.clickNext = this.clickNext.bind(this);
  }

  clickNext() {
    console.log("clickNext was clicked")
  }

  render() {
    return(
      <>
      <form>
        <p> {this.props.data.questionNumber} {this.props.data.question} </p>
        <input type="radio" name="multiple" value ={this.props.data.answers[0]}/> {this.props.data.answers[0]} 
        <input type="radio" name="multiple" value ={this.props.data.answers[1]}/> {this.props.data.answers[1]}
        <input type="radio" name="multiple" value ={this.props.data.answers[2]}/> {this.props.data.answers[2]}
        <input type="radio" name="multiple" value ={this.props.data.answers[3]}/> {this.props.data.answers[3]}
      </form>
      <button onClick={this.props.data.increaseArrayIndex} >Next</button>
      </>
    )
  }

};