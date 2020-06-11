import React, { Component } from 'react';

export default class Quiz extends Component {

  render() {
    return(
      <div>Quiz</div>
    )
  }

}

// https://opentdb.com/api.php?amount=10&category=15&difficulty=easy

// sample API call for questions.

// for any difficulty, remove the difficulty option.

// break the URL into sections, and concatenate the whole from whichever parts are required.

// change to a class and run an async function to pull list of questions, then populate the Quiz component