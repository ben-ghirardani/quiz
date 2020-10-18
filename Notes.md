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
3) Is score updating quickly enough? Include promise to make sure it's being captured before moving to next screen?
4) HTML character encoding - apostrophes and quotation marks interpreted incorrectly.
5) Update code? Arrow functions and Hooks?
7) folder naming convention - folders which are functions in camelCase? Folders which are classes CamelCase?
9) change Loading to a spinning icon?
10) is it obvious that the user can scroll down in categories now that scroll is hidden?
11) add an animation to Landing Page to hide the fact that it waits for data to fetch.


0) the whole border around the components is pointless and cause unnecessary problems...
  * should also make it easier to share the display component across other components
  check the min / max of all components
  check mobile settings now that main has changed

  Why is there a scroll on screens that should be the size of the screen? should not be any scroll.


  12) do the functions count as Components? Should they in another folder?