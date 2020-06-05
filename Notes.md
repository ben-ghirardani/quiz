Add prop types -> https://reactjs.org/docs/typechecking-with-proptypes.html

From App.js
// endpoint for number of questions per category
// https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
// contains total questions, no. of easy, medium and hard

Can currently select difficulty before selecting a category, create condition to prevent this?

When button is clicked, have it stay highlighted.
- pass styles to button



***
  Refactor display completely -> show drop down, and only display difficulty after a choice has been made, same with length.
***

3 new components, Category, Difficulty and Length. Each displays, takes user input, then next component is rendered in its place using user input.