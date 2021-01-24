import React from 'react';
import Length from './Length';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  jest.clearAllMocks();
});

const disableLength = jest.fn();
const setLengthAndDisplay = jest.fn();

test("page renders with all elements", async ()=>{

  disableLength.mockReturnValue(false);
  setLengthAndDisplay.mockReturnValue(30, "Quiz");

  const {getByText} = render(
    <Length
      disableLength={disableLength}
      setLengthAndDisplay={setLengthAndDisplay}
    />
  );
  expect(getByText("Short")).toBeInTheDocument();
  expect(getByText("Medium")).toBeInTheDocument();
  expect(getByText("Long")).toBeInTheDocument();
});

test("enough questions to populate a short quiz, onClick functionality works", ()=>{

  disableLength.mockReturnValue(false);
  setLengthAndDisplay.mockReturnValue(10, "Quiz");

  render(
    <Length
      disableLength={disableLength}
      setLengthAndDisplay={setLengthAndDisplay}
    />
  );

  expect(setLengthAndDisplay).toHaveBeenCalledTimes(0);
  userEvent.click(screen.getByText("Short"));
  expect(setLengthAndDisplay).toHaveBeenCalledTimes(1);
});

test("not enough questions to populate a short quiz, onClick functionality disabled", ()=>{

  disableLength.mockReturnValue(true);
  setLengthAndDisplay.mockReturnValue(10, "Quiz");

  render(
    <Length
      disableLength={disableLength}
      setLengthAndDisplay={setLengthAndDisplay}
    />
  );

  expect(setLengthAndDisplay).toHaveBeenCalledTimes(0);
  userEvent.click(screen.getByText("Short"));
  expect(setLengthAndDisplay).toHaveBeenCalledTimes(0);
});