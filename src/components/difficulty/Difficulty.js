import React, { Component } from 'react';
import Button from '../button/Button';

export default function Difficulty () {
  return <div>

  {"Choose difficulty"}
    {
      <Button
        disabled={this.props.disableDifficultyButton("Easy")}
        name={"Easy"}
        value={"Easy"}
        onClick={() => this.props.setDifficultyAndDisplay("Easy", "Length")}
        buttonText={"Easy"}
      />
    }
    {
      <Button
        disabled={this.props.disableDifficultyButton("Medium")}
        name={"Medium"}
        value={"Medium"}
        onClick={() => this.setDifficultyAndDisplay("Medium", "Length")}
        buttonText={"Medium"}
      />
    }
    {
      <Button
        disabled={this.props.disableDifficultyButton("Hard")}
        name={"Hard"}
        value={"Hard"}
        onClick={() => this.setDifficultyAndDisplay("Hard", "Length")}
        buttonText={"Hard"}
      />
    }
    {
      <Button
        disabled={this.props.disableDifficultyButton("Random")}
        name={"Random"}
        value={"Random"}
        onClick={() => this.setDifficultyAndDisplay("Random", "Length")}
        buttonText={"Random"}
      />
    }
    </div>
}
