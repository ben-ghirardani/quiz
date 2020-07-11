// import React, { Component } from 'react';

// export default class Multiple extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       answer: null
//     };
//     this.clickNext = this.clickNext.bind(this);
//   }

//   clickNext() {
//     let answer = this.state.answer;
//     let correctAnswer = this.props.data.correctAnswer;
//     if(answer === null) {
//       // add error handling. e.g. answers and radio button flash to prompt selection
//       return
//     } else if (answer === correctAnswer) {
//       this.props.data.addToScore();
//       this.props.data.increaseArrayIndex();
//     } else if (answer !== correctAnswer) {
//       this.props.data.increaseArrayIndex();
//     } else return
//   }

//   render() {

//     let answer1 = this.props.data.answers[0];
//     let answer2 = this.props.data.answers[1];
//     let answer3 = this.props.data.answers[2];
//     let answer4 = this.props.data.answers[3];

//     return(
//       <>
//       <form>
//         <p> {this.props.data.questionNumber} {this.props.data.question} </p>
//         <input type="radio" name="multiple" value ={answer1} onClick={ ()=> this.setState({answer: answer1}) } /> {answer1}
//         <input type="radio" name="multiple" value ={answer2} onClick={ ()=> this.setState({answer: answer2}) } /> {answer2}
//         <input type="radio" name="multiple" value ={answer3} onClick={ ()=> this.setState({answer: answer3}) } /> {answer3}
//         <input type="radio" name="multiple" value ={answer4} onClick={ ()=> this.setState({answer: answer4}) } /> {answer4}
//       </form>
//       <button onClick={this.clickNext} >Next</button>
//       </>
//     )
//   }

// };

// ORiginal implementation above


import React, { Component } from 'react';

export default class Multiple extends Component {

  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(answer) {
    let correctAnswer = this.props.data.correctAnswer;
    if (answer === correctAnswer) {
      this.props.data.addToScore();
      this.props.data.increaseArrayIndex();
    } else if (answer !== correctAnswer) {
      this.props.data.increaseArrayIndex();
    } 
  }

  render() {

    let answer1 = this.props.data.answers[0];
    let answer2 = this.props.data.answers[1];
    let answer3 = this.props.data.answers[2];
    let answer4 = this.props.data.answers[3];

    return(
    // will need to make the container a proper component not a fragment in order to add Framer Motion stylings
    <>
      <p> {this.props.data.questionNumber} {this.props.data.question} </p>
      {/* have a circuler button, with the text to the right, buttons arranged vertically */}
      <button name="answer1" value ={answer1} onClick={ ()=> this.buttonClick(answer1) } ></button> {answer1}
      {/* replace line breaks with CSS */}
      <br></br>
      <button name="answer2" value ={answer2} onClick={ ()=> this.buttonClick(answer2) } ></button> {answer2}
      <br></br>
      <button name="answer3" value ={answer3} onClick={ ()=> this.buttonClick(answer3) } ></button> {answer3}
      <br></br>
      <button name="answer4" value ={answer4} onClick={ ()=> this.buttonClick(answer4) } ></button> {answer4}
    </>
    )
  }

};