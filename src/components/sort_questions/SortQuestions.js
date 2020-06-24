import fisherYatesShuffle from '../fisher_yates_shuffle/FisherYatesShuffle.js'

// map through API response of questions, create new array of sorted questions
export default function sortQuestions(array) {
  
  let sortedQuestions = [];
  let number = 1;

  array.forEach(item => {
    // default question format
    let question = {
    type: item.type,
    questionNumber: number,
    question: item.question,
    answers: fisherYatesShuffle(item.incorrect_answers.concat(item.correct_answer)),
    correctAnswer: item.correct_answer
  };
    sortedQuestions.push(question);
    number = number + 1;
  });
  return sortedQuestions;
};