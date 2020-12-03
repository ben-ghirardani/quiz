import React from 'react';
import Results from './Results';
import {render} from '@testing-library/react';

afterEach(()=>{
  jest.clearAllMocks();
});

const score = "8";
const quizLength = "10"

test("it renders the component correctly", ()=>{
  const {getByText} = render(
    <Results
      score={score}
      quizLength={quizLength}
    />
  );
  expect(getByText("You scored 8 out of 10")).toBeVisible();
});