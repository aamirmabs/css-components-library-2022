console.log("app.js connected!");

/* START text card dismiss functionality */
// === LOGIC ===
// fetch elements that have the .dismiss-trigger
// get the closest element that has .with-dismiss
// then delete the parent .with-dismiss element from the DOM

// get all buttons that have the .dismiss-trigger class
let dismissControl = (e) => {
  // get the parent .card and remove from the DOM
  const card = e.target.closest(".with-dismiss").remove();
};

// get all elements that can trigger dismiss actions
const dismissElements = document.querySelectorAll(".dismiss-trigger");

// convert to array from HTMLCollection and filter .dismiss-trigger buttons
const dismissElementsArray = Array.from(dismissElements);

// add the dismissControl() event handler
dismissElementsArray.forEach((ele) => {
  ele.addEventListener(`click`, dismissControl);
});
/* END text card dismiss functionality */
