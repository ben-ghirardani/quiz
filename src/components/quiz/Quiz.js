import React, { Component } from 'react';
import Loading from '../loading/Loading.js';

export default class Quiz extends Component {

  constructor(props) {
    super(props);
    this.createAPIURL = this.createAPIURL.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  };

  componentDidMount() {
    this.getQuestions();
  }

  async getQuestions() {
    let URL = this.createAPIURL(this.props.amount, this.props.category, this.props.difficulty);
    let response = await fetch(URL);
    let data = await response.json();
    this.props.addQuestions(data);
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
      <>
        {this.props.questions? <div>Map throught list of questions, render Question type based on properties</div> : <Loading/>}
      </>
    )
  }

}