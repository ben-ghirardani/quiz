Add prop types -> https://reactjs.org/docs/typechecking-with-proptypes.html

From App.js
// endpoint for number of questions per category
// https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE
// contains total questions, no. of easy, medium and hard


***
  Display the chosen category somewhere
***


Bugs to solve - 

1) Tidy up code! Check indentation on every page, etc.
2) Is score updating quickly enough? Include promise to make sure it's being captured before moving to next screen?
3) folder naming convention - folders which are functions in camelCase? Folders which are classes CamelCase?
6) add an animation to Landing Page to hide the fact that it waits for data to fetch.

*** possible to create an animation effect that pulses colour to show that something is an option to click?

super(props) deprecated? Look into this.

force a re-render of multiple/boolean to kick off the animation as it doesn't work if the last question type was the same