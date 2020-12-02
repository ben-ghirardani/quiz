import React from 'react';
import Difficulty from './Difficulty.js';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  jest.clearAllMocks();
});

const disableDifficulty = jest.fn();

const setDifficultyAndDisplay = jest.fn();
disableDifficulty.mockReturnValue("easy", "Length");

test("page renders with all components", ()=> {
    
  const { getByText } = render(
    <Difficulty 
      disableDifficulty={disableDifficulty}
      setDifficultyAndDisplay={setDifficultyAndDisplay}
    />
  );

  expect(getByText("Choose difficulty")).toBeVisible();
  expect(getByText("Easy")).toBeVisible();
  expect(getByText("Medium")).toBeVisible();
  expect(getByText("Hard")).toBeVisible();
  expect(getByText("Random")).toBeVisible();
})

describe("there are not enough questions of each type to populate a quiz", ()=> {  

  test("onClick functionality is disabled", ()=> {

    disableDifficulty.mockReturnValue(true);

    render(
      <Difficulty 
        disableDifficulty={disableDifficulty}
        setDifficultyAndDisplay={setDifficultyAndDisplay}
      />
    );
    userEvent.click(screen.getByText("Easy"));
    expect(setDifficultyAndDisplay).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByText("Medium"));
    expect(setDifficultyAndDisplay).toHaveBeenCalledTimes(0);  
  })

})

describe("there are enough questions of each type to populate a quiz", ()=> {  

  test("onClick functionality is enabled", ()=> {

    disableDifficulty.mockReturnValue(false);

    render(
      <Difficulty 
        disableDifficulty={disableDifficulty}
        setDifficultyAndDisplay={setDifficultyAndDisplay}
      />
    );
    userEvent.click(screen.getByText("Easy"));
    expect(setDifficultyAndDisplay).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();

    userEvent.click(screen.getByText("Medium"));
    expect(setDifficultyAndDisplay).toHaveBeenCalledTimes(1);  
  })

})