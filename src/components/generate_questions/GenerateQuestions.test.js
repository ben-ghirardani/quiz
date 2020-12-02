import React from 'react';
import GenerateQuestions from './GenerateQuestions';
import {render} from '@testing-library/react';

afterEach(()=>{
  jest.clearAllMocks();
});

const increaseArrayIndex = jest.fn();
const addToScore = jest.fn();
const showQuestion = jest.fn();
jest.mock('../multiple/Multiple', ()=> ()=> (<div>Multiple</div>));
jest.mock('../boolean/Boolean', ()=> ()=> (<div>Boolean</div>));
jest.mock('../results/Results', ()=> ()=> (<div>Results</div>));

const questions = [
  {
    type: "multiple",
    questionNumber: 1,
    question: "In which country is Rome located?",
    answers: [
      "Germany", "France", "Italy", "Ireland"
    ],
    correctAnswer: "Italy"
  },
  {
    type: "boolean",
    questionNumber: 2,
    question: "Testing is great?",
    answers: [
      "True", "False"
    ],
    correctAnswer: "True"
  }
]



describe("showQuestion displays the correct component depending on input", ()=>{

  test("index < questions.length and points to <Multiple/>", ()=> {

    const {getByText} = render ( 
      <GenerateQuestions
        increaseArrayIndex={increaseArrayIndex}
        addToScore={addToScore}
        questions={questions}
        showQuestion={showQuestion}
        arrayIndex={0}
      />
    );
    expect(getByText("Multiple")).toBeVisible();
  });

  test("index < questions.length and points to <Boolean/>", ()=> {

    const {getByText} = render ( 
      <GenerateQuestions
        increaseArrayIndex={increaseArrayIndex}
        addToScore={addToScore}
        questions={questions}
        showQuestion={showQuestion}
        arrayIndex={1}
      />
    );
    expect(getByText("Boolean")).toBeVisible();
  });

  test("index >= questions.length so <Results/> should display", ()=> {

    const {getByText} = render ( 
      <GenerateQuestions
        increaseArrayIndex={increaseArrayIndex}
        addToScore={addToScore}
        questions={questions}
        showQuestion={showQuestion}
        arrayIndex={2}
      />
    );
    expect(getByText("Results")).toBeVisible();
  });

});