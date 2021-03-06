import React, { Component } from 'react';
import './App.css';
import Category from './components/category/Category';
import Difficulty from './components/difficulty/Difficulty';
import Length from './components/length/Length';
import Quiz from './components/quiz/Quiz';
import Loading from './components/loading/Loading';
import LandingPage from './components/landing_page/LandingPage';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        categories: null,
        questions: null,
        arrayIndex: 0,
        score: 0,
        display: "LandingPage",
        numQuestions: null,
        difficulty: null,
        length: null
      }
      this.getCategories = this.getCategories.bind(this);
      this.getCategoryID = this.getCategoryID.bind(this);
      this.getNumberOfQuestions = this.getNumberOfQuestions.bind(this);
      this.disableLength = this.disableLength.bind(this);
      this.disableDifficulty = this.disableDifficulty.bind(this);
      this.setDifficulty = this.setDifficulty.bind(this);
      this.changeDisplay = this.changeDisplay.bind(this);
      this.setDifficultyAndDisplay = this.setDifficultyAndDisplay.bind(this);
      this.setLength = this.setLength.bind(this);
      this.setLengthAndDisplay = this.setLengthAndDisplay.bind(this);
      this.addQuestions = this.addQuestions.bind(this);
      this.increaseArrayIndex = this.increaseArrayIndex.bind(this);
      this.addToScore = this.addToScore.bind(this);
      this.resetQuiz = this.resetQuiz.bind(this);
      this.clickLandingPage = this.clickLandingPage.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  };

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => this.setState({categories: data.trivia_categories}))
      .catch(error => console.log(error.message));
  };

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

  async getNumberOfQuestions(id) {
    let appendedID = id.toString();
    let response = await fetch(`https://opentdb.com/api_count.php?category=${appendedID}`);
    let data = await response.json();
    this.setState({numQuestions: data})
  }

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


  disableDifficulty(difficulty) {

    let disabled;
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
        disabled = true
      } else if (difficulty === "Medium" && mediumLength < 10) {
        disabled = true
      } else if (difficulty === "Hard" && hardLength < 10) {
        disabled = true
      } else if (difficulty === "Random" && randomLength < 10) {
        disabled = true
      } else disabled = false

    } else disabled = true;

    return disabled;
  }; 


  disableLength(length) {
    if ( 
      this.state.difficulty === "easy" && this.state.numQuestions.category_question_count.total_easy_question_count < length
    ) {return true}

    else if ( 
      this.state.difficulty === "medium" && this.state.numQuestions.category_question_count.total_medium_question_count < length
    ) {return true}

    else if (
      this.state.difficulty === "hard" && this.state.numQuestions.category_question_count.total_hard_question_count < length
    ) {return true}

    else if (
      this.state.difficulty === "random" && this.state.numQuestions.category_question_count.total_question_count < length
    ) {return true}

    else return false
  };

  addQuestions(data) {
    this.setState({questions: data})
  };

  increaseArrayIndex() {
    let arrayIndex = this.state.arrayIndex;
    let newIndex = arrayIndex + 1;
    this.setState({arrayIndex: newIndex});
  };

  addToScore() {
    let score = this.state.score;
    let newScore = score + 1;
    this.setState({score: newScore});
  };

  clickLandingPage() {
    if(this.state.categories) {
      this.changeDisplay("Category")
    } else console.log("data not ready")
  }

  resetQuiz() {
    this.setState({display: "Category"});
    this.setState({score: 0});
    this.setState({difficulty: null})
    this.setState({length: null})
    this.setState({arrayIndex: 0});
    this.setState({numQuestions: null});
    this.setState({questions: null});
  };

  render() {
    return(
      <div className="App">
    {this.state.display === "LandingPage" ? <LandingPage
      categories={this.state.categories}
      clickLandingPage={this.clickLandingPage}
    /> :
     this.state.display === "Category" ? <Category
        label="Category" 
        categories={this.state.categories} 
        selectName={"categorySelect"} 
        getCategoryID={this.getCategoryID} 
        getNumberOfQuestions={this.getNumberOfQuestions}
        changeDisplay={this.changeDisplay}
     /> : 
     this.state.display === "Difficulty" ? <Difficulty
        disableDifficulty={this.disableDifficulty}
        setDifficultyAndDisplay={this.setDifficultyAndDisplay}
     /> :
     this.state.display === "Length" ? <Length
        disableLength={this.disableLength}
        setLengthAndDisplay={this.setLengthAndDisplay}
     /> :
     this.state.display === "Quiz" ? <Quiz
        amount={this.state.length}
        category={this.state.numQuestions.category_id}
        difficulty={this.state.difficulty}
        addQuestions={this.addQuestions}
        questions={this.state.questions}
        arrayIndex={this.state.arrayIndex}
        increaseArrayIndex={this.increaseArrayIndex}
        addToScore={this.addToScore}
        score={this.state.score}
        resetQuiz={this.resetQuiz}
     /> :
     <Loading/>
    }
      </div>
    )
  }

}

export default App;