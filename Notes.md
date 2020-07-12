Add prop types -> https://reactjs.org/docs/typechecking-with-proptypes.html

From App.js
// endpoint for number of questions per category
// https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
// contains total questions, no. of easy, medium and hard

When button is clicked, have it stay highlighted.
- pass styles to button

***
  Display the chosen category somewhere
***


Bugs to solve - 

0) Tidy up code! Check indentation on every page, etc.

1) add error handling to reset back to category screen? Maybe not. Clutters up screen.
2) Re-factor the ternery in the render method of <Quiz/>, too long 
3) Is score updating quickly enough? Include promise to make sure it's being captured before moving to next screen?
4) HTML characyer encoding - apostrophes and quotation marks interpreted incorrectly.

5) What happens when you get your score? Stuck on results screen. Add a 'Try Again' button to go back to the beggining.

6) Update code? Arrow functions and Hooks.

70 Is there anything to stop the same question appearing more than once?