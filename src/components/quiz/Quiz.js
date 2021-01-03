import React, { Component } from 'react';
import Loading from '../loading/Loading.js';
import sortQuestions from '../sort_questions/SortQuestions.js';
import GenerateQuestions from '../generate_questions/GenerateQuestions.js';

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
    let { results } = data;
    let sortedData = await sortQuestions(results)
    this.props.addQuestions(sortedData);
  };

  createAPIURL(amount, category, difficulty) {
    let adjustedDifficulty;
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
        {this.props.questions ? 
          <GenerateQuestions 
            questions={this.props.questions} 
            arrayIndex={this.props.arrayIndex} 
            increaseArrayIndex={this.props.increaseArrayIndex}
            addToScore={this.props.addToScore}
            score={this.props.score}
            resetQuiz={this.props.resetQuiz}
          /> : 
          <Loading/>
        }
      </>
    )
  }

}