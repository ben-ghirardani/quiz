import React from 'react';
import Button from '../button/Button';
import './Difficulty.css';

export default function difficulty (props) {
  return <div className="difficulty">

  {"Choose difficulty"}
    {
      <Button
        disabled={props.disableDifficultyButton("Easy")}
        name={"Easy"}
        value={"Easy"}
        onClick={() => props.setDifficultyAndDisplay("easy", "Length")}
      />
    } {"Easy"}
    {
      <Button
        disabled={props.disableDifficultyButton("Medium")}
        name={"Medium"}
        value={"Medium"}
        onClick={() => props.setDifficultyAndDisplay("medium", "Length")}
      />
    } {"Medium"}
    {
      <Button
        disabled={props.disableDifficultyButton("Hard")}
        name={"Hard"}
        value={"Hard"}
        onClick={() => props.setDifficultyAndDisplay("hard", "Length")}
      />
    } {"Hard"}
    {
      <Button
        disabled={props.disableDifficultyButton("Random")}
        name={"Random"}
        value={"Random"}
        onClick={() => props.setDifficultyAndDisplay("random", "Length")}
      />
    } {"Random"}
    </div>
}