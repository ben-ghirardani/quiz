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
      <div className="length-item">
        <Button
          disabled={props.disableLengthButton(10)}
          name={"Short"}
          value={"Short"}
          onClick={() => props.setLengthAndDisplay(10, "Quiz")}
        />
        <p>
          Short
        </p>
      </div>
      
      {/* 20 questions */}
      <div className="length-item">
        <Button
          disabled={props.disableLengthButton(20)}
          name={"Medium"}
          value={"Medium"}
          onClick={() => props.setLengthAndDisplay(20, "Quiz")}
        />
        <p>
          Medium
        </p>
      </div>

      {/* 30 questions */}
      <div className="length-item">
        <Button
          disabled={props.disableLengthButton(30)}
          name={"Long"}
          value={"Long"}
          onClick={() => props.setLengthAndDisplay(30, "Quiz")}
        />
        <p>
          Long
        </p>
      </div>

    </div>
 
  </div>
}