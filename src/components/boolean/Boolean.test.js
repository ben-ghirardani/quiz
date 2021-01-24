import React from 'react';
import Boolean from './Boolean';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  jest.clearAllMocks();
})

const data = {
      type: "Boolean",
      questionNumber: 1,
      question: "Testing is a good idea",
      answers: ["True", "False"],
      correctAnswer: "True",
      increaseArrayIndex: jest.fn(),
      addToScore: jest.fn()
    };
  
const questionText = jest.fn();
questionText.mockReturnValue(data.question);


test("the page renders correctly", ()=> {

  const { getByText } = render(
    <Boolean
      data={data}
    />
  );
  expect(getByText("1 Testing is a good idea")).toBeVisible();
  expect(getByText("True")).toBeVisible();
  expect(getByText("False")).toBeVisible();
});

test("clicking the wrong answer does not increase the score", ()=> {

  render(
    <Boolean
      data={data}
    />
  );

  userEvent.click(screen.getByText("False"));
  expect(data.addToScore).toHaveBeenCalledTimes(0);
  expect(data.increaseArrayIndex).toHaveBeenCalledTimes(1);
});

// async/await test to account for async/await property of function tested
test("clicking the correct answer increases the score", async ()=> {

  render(
    <Boolean
      data={data}
    />
  );

  userEvent.click(screen.getByText("True"));
  expect(data.addToScore).toHaveBeenCalledTimes(1);
  expect(await data.increaseArrayIndex).toHaveBeenCalledTimes(1);
});