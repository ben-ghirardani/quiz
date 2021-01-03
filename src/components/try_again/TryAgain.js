import React from 'react';
import './TryAgain.css'

export default function tryAgain (props) {
  return <div className="try-again" onClick={props.resetQuiz} >Try Again?</div>
}