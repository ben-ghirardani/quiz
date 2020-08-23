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

5) What happens when you get your score? Stuck on results screen. Add a 'Try Again' button to go back to the beggining.

6) Update code? Arrow functions and Hooks?

7) Is there anything to stop the same question appearing more than once?
8) folder naming convention - folders which are functions in camelCase? Folders which are classes CamelCase?

9) CSS code for the divs of landing page, category, length, etc is copied across all components. Create a wrapper for them to sit in?

10) make the question component wider and shorter? Might look better on the page.

11) change all buttons to a universal button with it's own styling
12) change the container component for questions to be universal? Check how that works with Framer Motion animations?

13) hide scrollbar but keep functionality?
14) race conditions in <Category/> component. 
15) change Loading to a spinning icon?


***
  16) can I dynamically check the length of the answers and set the position of the answers based on the longest?
***

Otherwise how to justify content towards the left

header-box in <Multiple/> is overriding header-box in difficulty, need to consolidate