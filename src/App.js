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
        test: [
                {id: 123456789, name: "loading"}
              ]
      }
      this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  };

  // add a condition that checks of data is already there. Don't fetch if so.

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => this.setState({categories: data.trivia_categories, loading: false}))
      .catch(error => console.log(error.message));
  };

// when randomizing the array of answers to each question use the following Fisher-Yates (aka Knuth) Shuffle -
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  render() {
    return(
      <div className="App">
        <p>Quiz!</p>

    {/* improve this */}
    {this.state.loading ? 
      <DropDown label="Choose category" categories={this.state.test} selectName={"categorySelect"} /> : 
      <DropDown label="Choose category" categories={this.state.categories} selectName={"categorySelect"} />
    }
      </div>
    )
  }

}

export default App;
