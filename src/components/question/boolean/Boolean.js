import React, { Component } from 'react';

export default class Boolean extends Component {
  
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
        <input type="radio" name="boolean" value ="True" onClick={()=> console.log("true") } /> True
        <input type="radio" name="boolean" value="False" onClick={()=> console.log("false") } /> False
      </form>
      <button onClick={this.props.data.increaseArrayIndex} >Next</button>
      </>
    )
  }

};