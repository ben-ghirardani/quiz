import React from 'react';
import Button from '../button/Button';
import './Difficulty.css';

export default function difficulty (props) {
  return <div className="difficulty">

    <div className="difficulty-header">
      {"Choose difficulty"}
    </div>

    <div className="difficulty-body">
     
      <div className="difficulty-item">
        <Button
          disabled={props.disableDifficultyButton("Easy")}
          name={"Easy"}
          value={"Easy"}
          onClick={() => props.setDifficultyAndDisplay("easy", "Length")}
        />
        <p>
          Easy
        </p>
      </div>

      <div className="difficulty-item">
        <Button
          disabled={props.disableDifficultyButton("Medium")}
          name={"Medium"}
          value={"Medium"}
          onClick={() => props.setDifficultyAndDisplay("medium", "Length")}
        />
        <p>
          Medium
        </p>
      </div>

      <div className="difficulty-item">
        <Button
          disabled={props.disableDifficultyButton("Hard")}
          name={"Hard"}
          value={"Hard"}
          onClick={() => props.setDifficultyAndDisplay("hard", "Length")}
        />
        <p>
          Hard
        </p>
      </div>
      
      <div className="difficulty-item">
        <Button
          disabled={props.disableDifficultyButton("Random")}
          name={"Random"}
          value={"Random"}
          onClick={() => props.setDifficultyAndDisplay("random", "Length")}
        />
        <p>
          Random
        </p>
      </div>
    
     
    </div>
  
  </div>
}