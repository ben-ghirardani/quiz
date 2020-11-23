import sortQuestions from './SortQuestions.js';

const questionArray = [
  {
    type: "multiple",
    question: "What is a test?",
    correct_answer: "A test",
    incorrect_answers: ["Not a test", "A tree", "A coat"]
  },
  {
    type: "multiple",
    question: "When is a test?",
    correct_answer: "Now",
    incorrect_answers: ["Later", "Next week", "Never"]
  },
  {
    type: "multiple",
    question: "Where is a test?",
    correct_answer: "Here",
    incorrect_answers: ["There", "Over there", "Lost it"]
  },
  {
    type: "boolean",
    question: "True is true?",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    type: "boolean",
    question: "True is false?",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    type: "boolean",
    question: "Testing is great?",
    correct_answer: "True",
    incorrect_answers: ["False"]
  }
]