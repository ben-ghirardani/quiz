import React, { Component } from 'react';
import './App.css';
import DropDown from './components/drop_down/DropDown';
import Button from './components/button/Button';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        categories: null,
        // is this being used?
        chosenCategories: [],
        loading: true,
        numQuestions: null,
        difficulty: null,
        default: [
                {id: 123456789, name: "loading"}
              ]
      }
      this.getCategories = this.getCategories.bind(this);
      this.getCategoryID = this.getCategoryID.bind(this);
      this.getNumberOfQuestions = this.getNumberOfQuestions.bind(this);
      this.disableLengthButton = this.disableLengthButton.bind(this);
      this.disableDifficultyButton = this.disableDifficultyButton.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  };

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => this.setState({categories: data.trivia_categories, loading: false}))
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


  // disableDifficultyButton(difficulty) {
  //   let numPerCategory;
  //   let buttonState;
  //   if (!this.state.numQuestions) {
  //     buttonState = true
  //   } else {
  //     buttonState = false
  //   }
  //   return buttonState;
  // };

  disableDifficultyButton(difficulty) {
    let numPerCategory;
    let buttonState;

    if (!this.state.numQuestions) {
      buttonState = true
    } else if (difficulty === "Easy") {

    } else {
      buttonState = false
    }
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

    {/* find a better way to deal with this */}
    {this.state.loading ? 
      <DropDown 
        label="Choose a category" 
        categories={this.state.default} 
        selectName={"categorySelect"} 
        getCategoryID={this.getCategoryID} 
        getNumberOfQuestions={this.getNumberOfQuestions}
      /> : 
      <DropDown 
        label="Choose a category" 
        categories={this.state.categories} 
        selectName={"categorySelect"} 
        getCategoryID={this.getCategoryID} 
        getNumberOfQuestions={this.getNumberOfQuestions}
      />
    }

    {/* CSS should mean I don't need this */}
    <br></br>
    <br></br>

    {"Choose difficulty"}
    {
      <Button
        disabled={this.disableDifficultyButton("Easy")}
        // this.disableDifficultyButton(this.state.numQuestions.category_question_count.total_easy_question_count)
        name={"Easy"}
        value={"Easy"}
        onClick={() => this.setState({difficulty: "Easy"})}
        buttonText={"Easy"}
      />
    }
    {
      <Button
        disabled={!this.state.numQuestions}
        name={"Medium"}
        value={"Medium"}
        onClick={() => this.setState({difficulty: "Medium"})}
        buttonText={"Medium"}
      />
    }
    {
      <Button
        disabled={!this.state.numQuestions}
        name={"Hard"}
        value={"Hard"}
        onClick={() => this.setState({difficulty: "Hard"})}
        buttonText={"Hard"}
      />
    }
    {
      <Button
        disabled={!this.state.numQuestions}
        name={"Random"}
        value={"Random"}
        onClick={() => this.setState({difficulty: "Random"})}
        buttonText={"Random"}
      />
    }

    {/* CSS should mean I don't need this */}
    <br></br>
    <br></br>

    {"Choose length"}
    {/* 10 questions */}
    {
      <Button
        disabled={this.disableLengthButton(10)}
        name={"Short"}
        value={"Short"}
        onClick={() => console.log("Short button clicked!")}
        buttonText={"Short"}
      />
    }
    {/* 20 questions */}
    {
      <Button
        disabled={this.disableLengthButton(20)}
        name={"Medium"}
        value={"Medium"}
        onClick={() => console.log("Medium button clicked!")}
        buttonText={"Medium"}
      />
    }
    {/* 30 questions */}
    {
      <Button
        disabled={this.disableLengthButton(30)}
        name={"Long"}
        value={"Long"}
        onClick={() => console.log("Long button clicked!")}
        buttonText={"Long"}
      />
    }
      </div>
    )
  }

}

export default App;