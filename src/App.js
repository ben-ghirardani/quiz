import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        categories: null
      }
      this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  };

  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => this.setState({categories: data}))
      .catch(error => console.log(error.message));
  };

// when randomizing the array of answers use the following Fisher-Yates (aka Knuth) Shuffle -
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  render() {
    return(
      <div className="App">
        <p>Quiz!</p>
      </div>
    )
  }

}

export default App;
