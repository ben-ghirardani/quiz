import React from 'react';
import Button from  '../button/Button';
import './Length.css';

export default function length (props) {
  return <div className="length">

    <div className="length-header">
      {"Choose length"}
    </div>
        
    <div className="length-body">
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
      <br></br>
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
      <br></br>
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
 
  </div>
}