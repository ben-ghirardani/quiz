import React from 'react';
import Category from './Category';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(()=>{
  jest.clearAllMocks();
})

const getCategoryID = jest.fn();
const getNumberOfQuestions = jest.fn();
const changeDisplay = jest.fn();

const categories = [
  {
    name: "General Knowledge",
    id: 21
  },
  {
    name: "Testing",
    id: 1
  },
  {
    name: "Sport",
    id: 4
  }
];

test("the page renders correctly", ()=> {
  const { getByText } = render(
    <Category
      categories={categories}
    />
  )

  expect(getByText("Choose Category")).toBeVisible();
  expect(getByText("General Knowledge")).toBeVisible();
  expect(getByText("Testing")).toBeVisible();
  expect(getByText("Sport")).toBeVisible();
});

test("clicking a category activates onClick functionality", ()=> {
  render(
    <Category
      categories={categories}
      getCategoryID={getCategoryID}
      getNumberOfQuestions={getNumberOfQuestions}
      changeDisplay={changeDisplay}
    />
  )
  expect(getCategoryID).toHaveBeenCalledTimes(0);
  expect(getNumberOfQuestions).toHaveBeenCalledTimes(0);
  expect(changeDisplay).toHaveBeenCalledTimes(0);

  userEvent.click(screen.getByText("General Knowledge"));

  expect(getCategoryID).toHaveBeenCalledTimes(1);
  expect(getNumberOfQuestions).toHaveBeenCalledTimes(1);
  expect(changeDisplay).toHaveBeenCalledTimes(1);
})