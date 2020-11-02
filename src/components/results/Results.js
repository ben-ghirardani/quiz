import React from 'react';
import TryAgain from '../try_again/TryAgain.js'
import './Results.css';

export default function results(props) {
  return <div className="wrapper">
    <div className="results">
      {`You scored ${props.score} out of ${props.quizLength}`}
      <TryAgain resetQuiz={props.resetQuiz} />
    </div>
  </div>
}