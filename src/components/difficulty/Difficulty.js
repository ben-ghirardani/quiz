import React from 'react';
import Button from '../button/Button';

export default function difficulty (props) {
  return <div>

  {"Choose difficulty"}
    {
      <Button
        disabled={props.disableDifficultyButton("Easy")}
        name={"Easy"}
        value={"Easy"}
        onClick={() => props.setDifficultyAndDisplay("easy", "Length")}
        buttonText={"Easy"}
      />
    }
    {
      <Button
        disabled={props.disableDifficultyButton("Medium")}
        name={"Medium"}
        value={"Medium"}
        onClick={() => props.setDifficultyAndDisplay("medium", "Length")}
        buttonText={"Medium"}
      />
    }
    {
      <Button
        disabled={props.disableDifficultyButton("Hard")}
        name={"Hard"}
        value={"Hard"}
        onClick={() => props.setDifficultyAndDisplay("hard", "Length")}
        buttonText={"Hard"}
      />
    }
    {
      <Button
        disabled={props.disableDifficultyButton("Random")}
        name={"Random"}
        value={"Random"}
        onClick={() => props.setDifficultyAndDisplay("random", "Length")}
        buttonText={"Random"}
      />
    }
    </div>
}