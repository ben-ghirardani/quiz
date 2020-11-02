import React from 'react';
// import Button from  '../button/Button';
import Header from '../header/Header.js';
import './Length.css';

export default function length (props) {
  return <div className="length">

    <Header
      text={"Choose length"}
    />
        
    <div className="length-body">
      
      {/* 10 questions */}
      <div className="length-item">
        {/* <Button
          disabled={props.disableLengthButton(10)}
          name={"Short"}
          value={"Short"}
          onClick={() => props.setLengthAndDisplay(10, "Quiz")}
        /> */}
        <p
          onClick={() => props.setLengthAndDisplay(10, "Quiz")}
        >
          Short
        </p>
      </div>
      
      {/* 20 questions */}
      <div className="length-item">
        {/* <Button
          disabled={props.disableLengthButton(20)}
          name={"Medium"}
          value={"Medium"}
          onClick={() => props.setLengthAndDisplay(20, "Quiz")}
        /> */}
        <p
          onClick={() => props.setLengthAndDisplay(20, "Quiz")}
        >
          Medium
        </p>
      </div>

      {/* 30 questions */}
      <div className="length-item">
        {/* <Button
          disabled={props.disableLengthButton(30)}
          name={"Long"}
          value={"Long"}
          onClick={() => props.setLengthAndDisplay(30, "Quiz")}
        /> */}
        <p
          onClick={() => props.setLengthAndDisplay(30, "Quiz")}
        >
          Long
        </p>
      </div>

    </div>
 
  </div>
}