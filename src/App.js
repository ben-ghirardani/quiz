import React, { Component } from 'react';
import './App.css';

import Category from './components/category/Category';
import Difficulty from './components/difficulty/Difficulty';
import Length from './components/length/Length';
import Quiz from './components/quiz/Quiz';
import Loading from './components/loading/Loading';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        categories: null,
        // is this being used?
        chosenCategories: [],
        display: "Loading",
        numQuestions: null,
        difficulty: null,
        length: null
      }
      this.getCategories = this.getCategories.bind(this);
      this.getCategoryID = this.getCategoryID.bind(this);
      this.getNumberOfQuestions = this.getNumberOfQuestions.bind(this);
      this.disableLengthButton = this.disableLengthButton.bind(this);
      this.disableDifficultyButton = this.disableDifficultyButton.bind(this);
      this.setDifficulty = this.setDifficulty.bind(this);
      this.changeDisplay = this.changeDisplay.bind(this);
      this.setDifficultyAndDisplay = this.setDifficultyAndDisplay.bind(this);
      this.setLength = this.setLength.bind(this);
      this.setLengthAndDisplay = this.setLengthAndDisplay.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  };

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => this.setState({categories: data.trivia_categories, display: "Category"}))
      .catch(error => console.log(error.message));
  };

  // get the category ID from the category name
  getCategoryID(categoryName) {
    let categories = this.state.categories;
    let categoryID;
    
    categories.forEach(category => {
      if ( category.name === categoryName) {
        categoryID = category.id.toString();
      } else {
        return
      }
    })
    return categoryID;
  };

  // use ID to get number of questions
  async getNumberOfQuestions(id) {
    let appendedID = id.toString();
    let response = await fetch(`https://opentdb.com/api_count.php?category=${appendedID}`);
    let data = await response.json();
    this.setState({numQuestions: data})
  }

// when randomizing the array of answers to each question use the following Fisher-Yates (aka Knuth) Shuffle -
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  // function to combine setDifficulty and changeDisplay for difficulty buttons
  setDifficultyAndDisplay(difficulty, display) {
    this.setDifficulty(difficulty);
    this.changeDisplay(display);
  }

  setLengthAndDisplay(length, display) {
    this.setLength(length);
    this.changeDisplay(display);
  } 

  setDifficulty(value) {
    this.setState({difficulty: value})
  }

  setLength(value) {
    this.setState({length: value})
  };

  changeDisplay(value) {
    this.setState({display: value})
  }

  // returns boolean to apply to disable property of <Button/>
  disableDifficultyButton(difficulty) {

    let buttonState;
    let easyLength;
    let mediumLength;
    let hardLength;
    let randomLength;

    if(this.state.numQuestions) {
      easyLength = this.state.numQuestions.category_question_count.total_easy_question_count;
      mediumLength = this.state.numQuestions.category_question_count.total_medium_question_count;
      hardLength = this.state.numQuestions.category_question_count.total_hard_question_count;
      randomLength = this.state.numQuestions.category_question_count.total_question_count;

      if(difficulty === "Easy" && easyLength < 10) {
        buttonState = true
      } else if (difficulty === "Medium" && mediumLength < 10) {
        buttonState = true
      } else if (difficulty === "Hard" && hardLength < 10) {
        buttonState = true
      } else if (difficulty === "Random" && randomLength < 10) {
        buttonState = true
      } else buttonState = false
    } else buttonState = true;
    return buttonState;
  }; 


  disableLengthButton(length) {
    if(!this.state.difficulty) {
      return true
    } else if ( 
      this.state.difficulty === "Easy" && this.state.numQuestions.category_question_count.total_easy_question_count < length
    ) {return true} 
      else if ( 
      this.state.difficulty === "Medium" && this.state.numQuestions.category_question_count.total_medium_question_count < length
    ) {return true} 
      else if (
      this.state.difficulty === "Hard" && this.state.numQuestions.category_question_count.total_hard_question_count < length
    ) {return true} 
      else if (
      this.state.difficulty === "Random" && this.state.numQuestions.category_question_count.total_question_count < length
    ) {return true}
    return false
  };

  render() {
    return(
      <div className="App">
        <p>Quiz!</p>

    {this.state.display === "Loading" ? <Loading/> :
     this.state.display === "Category" ? <Category
        label="Choose a category" 
        categories={this.state.categories} 
        selectName={"categorySelect"} 
        getCategoryID={this.getCategoryID} 
        getNumberOfQuestions={this.getNumberOfQuestions}
        changeDisplay={this.changeDisplay}
     /> : 
     this.state.display === "Difficulty" ? <Difficulty
        disableDifficultyButton={this.disableDifficultyButton}
        setDifficultyAndDisplay={this.setDifficultyAndDisplay}
     /> :
     this.state.display === "Length" ? <Length
        disableLengthButton={this.disableLengthButton}
        setLengthAndDisplay={this.setLengthAndDisplay}
     /> :
     this.state.display === "Quiz" ? <Quiz/> :
     <Loading/>
    }

      </div>
    )
  }

}

export default App;