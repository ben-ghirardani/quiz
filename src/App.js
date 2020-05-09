import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        currentQuiz: null
      }
  }  

    render() {
      return(
        <div className="App">
          <p>Quiz!</p>
        </div>
      )
    }

  }

export default App;
