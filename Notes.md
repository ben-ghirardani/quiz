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
4) HTML character encoding - apostrophes and quotation marks interpreted incorrectly.

6) Update code? Arrow functions and Hooks?

7) Is there anything to stop the same question appearing more than once?
8) folder naming convention - folders which are functions in camelCase? Folders which are classes CamelCase?

9) CSS code for the divs of landing page, category, length, etc is copied across all components. Create a wrapper for them to sit in?

12) change the container component for questions to be universal? Check how that works with Framer Motion animations?

14) race conditions in <Category/> component. 
15) change Loading to a spinning icon?

***
  16) can I dynamically check the length of the question and change font size accordingly?
***

17) is it obvious that the user can scroll down in categories now that scroll is hidden?

18) picking 'Try Again' for a second time does not reset the quiz.



19) Position True and False answers closer to the middle of the screen.