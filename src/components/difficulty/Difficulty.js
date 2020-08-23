import React from 'react';
import Button from '../button/Button';
import './Difficulty.css';

export default function difficulty (props) {
  return <div className="difficulty">

    <div className="difficulty-header">
      {"Choose difficulty"}
    </div>

    <div className="body-box">
      {
      <Button
        disabled={props.disableDifficultyButton("Easy")}
        name={"Easy"}
        value={"Easy"}
        onClick={() => props.setDifficultyAndDisplay("easy", "Length")}
        buttonText={"Easy"}
      />
    }
    <br></br>
    {
      <Button
        disabled={props.disableDifficultyButton("Medium")}
        name={"Medium"}
        value={"Medium"}
        onClick={() => props.setDifficultyAndDisplay("medium", "Length")}
      />
    } {"Medium"}
    <br></br>
    {
      <Button
        disabled={props.disableDifficultyButton("Hard")}
        name={"Hard"}
        value={"Hard"}
        onClick={() => props.setDifficultyAndDisplay("hard", "Length")}
      />
    } {"Hard"}
    <br></br>
    {
      <Button
        disabled={props.disableDifficultyButton("Random")}
        name={"Random"}
        value={"Random"}
        onClick={() => props.setDifficultyAndDisplay("random", "Length")}
      />
    } {"Random"}
    </div>
  
  </div>
}