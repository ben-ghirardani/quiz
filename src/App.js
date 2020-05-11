import React, { Component } from 'react';
import './App.css';
import dropDown from './components/drop_down/dropDown';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        categories: null,
        test: [
                {name: "Geography"},
                {name: "General Knowledge"}
              ]
      }
      this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories()
  };

  // add a condition that checks of data is already there. Don't fetch if so.
  // change to an arrow
  getCategories() {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => this.setState({categories: data}))
      .catch(error => console.log(error.message));
  };

// when randomizing the array of answers to each question use the following Fisher-Yates (aka Knuth) Shuffle -
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  render() {
    return(
      <div className="App">
        <p>Quiz!</p>

  {/* use a ternery statement in populating dropDown. fetch can change state, pre = default data, post = fetched daata */}

      </div>
    )
  }

}

export default App;
