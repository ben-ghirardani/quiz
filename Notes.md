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

1) Tidy up code! Check indentation on every page, etc.

2) Re-factor the ternery in the render method of <Quiz/>, too long 
3) Is score updating quickly enough? Include promise to make sure it's being captured before moving to next screen?
4) HTML character encoding - apostrophes and quotation marks interpreted incorrectly.

5) Update code? Arrow functions and Hooks?

6) Is there anything to stop the same question appearing more than once?
7) folder naming convention - folders which are functions in camelCase? Folders which are classes CamelCase?

***
8) CSS code for the divs of landing page, category, length, etc is copied across all components. Create a wrapper for them to sit in?


9) change Loading to a spinning icon?

10) is it obvious that the user can scroll down in categories now that scroll is hidden?

12) is Item used anymore? Check then get rid.
12) is MainContainer used anymore? Check then get rid. Or implement correctly.