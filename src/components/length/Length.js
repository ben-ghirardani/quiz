import React from 'react';
import Button from  '../button/Button';
import './Length.css';

export default function length (props) {
  return <div className="length">
        {"Choose length"}
    {/* 10 questions */}
    {
      <Button
        disabled={props.disableLengthButton(10)}
        name={"Short"}
        value={"Short"}
        onClick={() => props.setLengthAndDisplay(10, "Quiz")}
        buttonText={"Short"}
      />
    }
    {/* 20 questions */}
    {
      <Button
        disabled={props.disableLengthButton(20)}
        name={"Medium"}
        value={"Medium"}
        onClick={() => props.setLengthAndDisplay(20, "Quiz")}
        buttonText={"Medium"}
      />
    }
    {/* 30 questions */}
    {
      <Button
        disabled={props.disableLengthButton(30)}
        name={"Long"}
        value={"Long"}
        onClick={() => props.setLengthAndDisplay(30, "Quiz")}
        buttonText={"Long"}
      />
    }
  </div>
}