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
        default: [
                {id: 123456789, name: "loading"}
              ]
      }
      this.getCategories = this.getCategories.bind(this);
      this.getCategoryID = this.getCategoryID.bind(this);
      this.getNumberOfQuestions = this.getNumberOfQuestions.bind(this);
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
        name={"Easy"}
        value={"Easy"}
        onClick={() => console.log("Easy button clicked!")}
        buttonText={"Easy"}
      />
    }
    {
      <Button
        name={"Medium"}
        value={"Medium"}
        onClick={() => console.log("Medium button clicked!")}
        buttonText={"Medium"}
      />
    }
    {
      <Button
        name={"Hard"}
        value={"Hard"}
        onClick={() => console.log("Hard button clicked!")}
        buttonText={"Hard"}
      />
    }
    {
      <Button
        name={"Random"}
        value={"Random"}
        onClick={() => console.log("Random button clicked!")}
        buttonText={"Random"}
      />
    }

    {/* CSS should mean I don't need this */}
    <br></br>
    <br></br>

    {"Choose length"}
    {
      <Button
        name={"Short"}
        value={"Short"}
        onClick={() => console.log("Short button clicked!")}
        buttonText={"Short"}
      />
    }
    {
      <Button
        name={"Medium"}
        value={"Medium"}
        onClick={() => console.log("Medium button clicked!")}
        buttonText={"Medium"}
      />
    }
    {
      <Button
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
