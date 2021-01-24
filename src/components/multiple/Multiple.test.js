import React from 'react';
import Multiple from './Multiple';
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

  // is it correct to make every expect await as it relates to an async/await function?
  describe("onClick sorts between correct and incorrect answers", ()=>{

    test("clicking the wrong answer does not increase the score", ()=>{
      data.answers = ["Not at all", "A little", "Super useful!", "What's testing?"]
      render(
        <Multiple
          data={data}
        />
      );
      expect(data.addToScore).toHaveBeenCalledTimes(0);
      expect(data.increaseArrayIndex).toHaveBeenCalledTimes(0);
      userEvent.click(screen.getByText("What's testing?"));
      expect(data.addToScore).toHaveBeenCalledTimes(0);
      expect(data.increaseArrayIndex).toHaveBeenCalledTimes(1);
    });

    // async/await test to account for async/await property of function tested
    test("clicking the correct answer does increase the score", async ()=>{

      data.answers = ["Not at all", "A little", "Super useful!", "What's testing?"]

      render(
        <Multiple
          data={data}
        />
      );
      expect(data.addToScore).toHaveBeenCalledTimes(0);
      expect(data.increaseArrayIndex).toHaveBeenCalledTimes(0);
      userEvent.click(screen.getByText("Super useful!"));
      expect(data.addToScore).toHaveBeenCalledTimes(1);
      expect(await data.increaseArrayIndex).toHaveBeenCalledTimes(1);
    });

  });