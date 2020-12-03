import React from 'react';
import TryAgain from './TryAgain';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  jest.clearAllMocks();
});

const resetQuiz = jest.fn();

test("it renders correctly", ()=>{
  const {getByText} = render(
    <TryAgain
      resetQuiz={resetQuiz}
    />
  );
  expect(getByText("Try Again?")).toBeVisible();
});

test("onClick functionality works correctly", ()=>{
  render(
    <TryAgain
      resetQuiz={resetQuiz}
    />
  );
  expect(resetQuiz).toHaveBeenCalledTimes(0);
  userEvent.click(screen.getByText("Try Again?"));
  expect(resetQuiz).toHaveBeenCalledTimes(1);
});