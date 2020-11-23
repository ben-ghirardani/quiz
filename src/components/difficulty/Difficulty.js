import React from 'react';
import Header from '../header/Header.js';
import './Difficulty.css';

export default function difficulty (props) {

  const easy = props.disableDifficulty("Easy");
  const medium = props.disableDifficulty("Medium");
  const hard = props.disableDifficulty("Hard");
  const random = props.disableDifficulty("Random");

  return <div className="difficulty">

    <Header
      text={"Choose difficulty"}
    />

    <div className="difficulty-body">
     
      <div className="difficulty-item">
        <p onClick={() => easy === false ? props.setDifficultyAndDisplay("easy", "Length") : null } >
          Easy
        </p>
      </div>

      <div className="difficulty-item">
        <p onClick={() => medium === false ? props.setDifficultyAndDisplay("medium", "Length") : null } >
          Medium
        </p>
      </div>

      <div className="difficulty-item">
        <p onClick={() => hard === false ? props.setDifficultyAndDisplay("hard", "Length") : null } >
          Hard
        </p>
      </div>
      
      <div className="difficulty-item">
        <p onClick={() => random === false ? props.setDifficultyAndDisplay("random", "Length") : null } >
          Random
        </p>
      </div>
     
    </div>
  
  </div>
}