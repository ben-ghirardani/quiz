import React from 'react';
import Multiple from './Multiple';
// import parseText from '../parse_text/parseText';
// import checkStringLength from '../check_string_length/CheckStringLength'
// import setFontSize from '../set_font_size/SetFontSize.js'
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  jest.clearAllMocks();
});

let data = {
      question: "How useful is testing?",
      questionNumber: "1",
      answers: null,
      correctAnswer: "Super useful!",
      addToScore: jest.fn(),
      increaseArrayIndex: jest.fn()
    }

describe("setComponentWidth dynamically alters the width of the component based on the longest answer", ()=>{

  test("setComponentWidth receives an answer with length <= 25 and returns 50%", ()=>{

    data.answers = ["Not at all", "A little", "Super useful!", "What's testing?"]

    render(
      <Multiple
        data={data}
      />
    )
    const component = screen.getByTestId('multiple-body');
    expect(component).toHaveStyle('width: 50%');
  });

  test("setComponentWidth receives an answer with length > 25 && <= 50 and returns 65%", ()=>{

    data.answers = ["A", "B", "C", "This is a test answer that is greater than 25"]

    render(
      <Multiple
        data={data}
      />
    )
    const component = screen.getByTestId('multiple-body');
    expect(component).toHaveStyle('width: 65%');
  });

  test("setComponentWidth receives an answer with length > 50 and returns 100%", ()=>{

    data.answers = ["A", "B", "C", "This is a test answer that is greater than 50 to test a large component"]

    render(
      <Multiple
        data={data}
      />
    )
    const component = screen.getByTestId('multiple-body');
    expect(component).toHaveStyle('width: 100%');
  });

});

  