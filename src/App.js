import React, { Component } from 'react';
import './App.css';
import DropDown from './components/drop_down/DropDown';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        categories: null,
        chosenCategories: [],
        loading: true,
        testNumbers: null,
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

  // get the category from the category name
  getCategoryID(categoryName) {
    let categories = this.state.categories;
    let categoryID;
    categories.forEach(category => {
      if (category.name === categoryName) {
        categoryID = category.id.toString();
      } else {
        return
      }
    return categoryID;
    });
  }

  // use ID to get number of questions
  async getNumberOfQuestions(id) {
    let response = await fetch("https://opentdb.com/api_count.php?category=19");
    let data = response.json();
    this.setState({testNumbers: data})
  }

    // endpoint for number of questions per category
    // https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
    // contains total questions, no. of easy, medium and hard


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
      </div>
    )
  }

}

export default App;
