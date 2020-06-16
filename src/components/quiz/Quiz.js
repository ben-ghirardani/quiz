import React, { Component } from 'react';
import GetQuestions from '../get_questions/GetQuestions';

export default class Quiz extends Component {

  constructor(props) {
    super(props);
    this.createAPIURL = this.createAPIURL.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  };

  componentDidMount() {
    // fetch data using URL from createAPIURL
  }

  async getQuestions() {
    let URL = this.createAPIURL(this.props.amount, this.props.category, this.props.difficulty);
    let response = await fetch(URL);
    let data = await response.json();
  };

  createAPIURL(amount, category, difficulty) {
    let adjustedDifficulty;

    // unpick previous code to make this less fussy?
    if(difficulty === "random") {
      adjustedDifficulty = ""
    } else {
      adjustedDifficulty = difficulty
    }
    let URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${adjustedDifficulty}`;
    return URL;
  }

  render() {
    return(
      // conditinally render Getting Questions until data has been pulled, then display questions
      <div>Quiz</div>
    )
  }

}