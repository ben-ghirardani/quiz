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

1) add error handling to reset back to category screen? Maybe not. Clutters up screen.
2) once a radio button is selected, it remains selected for the next question, need to default to unselected.
  defaultChecked={false} doesn't work
3) Re-factor the ternery in the render method of <Quiz/>, too long 
4) Is score updating quickly enough? Include promise to make sure it's being captured before moving to next screen?
5) HTML characyer encoding - apostrophes and quotation marks interpreted incorrectly.

6) change radio buttons into standard buttons in order to make better use of Framer Motion animations. 
  That way I can remove the 'next' button, and have the buttons themselves provide the same functionality.  