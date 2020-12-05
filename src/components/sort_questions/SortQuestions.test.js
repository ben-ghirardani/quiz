import sortQuestions from './SortQuestions.js';

const questionArray = [
  {
    type: "multiple",
    question: "What is a test?",
    correct_answer: "A test",
    incorrect_answers: ["Not a test", "A tree", "A coat"]
  }
]

test("functions creates a new array containing correct and incorrect answers", ()=>{
  let sortedArray = sortQuestions(questionArray);
  expect(sortedArray[0].answers.length).toBe(4);
});