Add prop types -> https://reactjs.org/docs/typechecking-with-proptypes.html


add a map function to to getCategories, create an object for each entry ->

{
  category: taken from API,
  id: taken from API,
  totalQuestions: null,
  totalEasy: null,
  totalMedium: null,
  totalHard: null
}


create a function in App that gets sent to DropDown and pulls category and id onSubmit of DropDown

From App.js
// endpoint for number of questions per category
// https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
// contains total questions, no. of easy, medium and hard