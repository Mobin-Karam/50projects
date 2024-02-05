const steps = document.getElementById("steps").children;
const spanCount = document
  .getElementById("steps")
  .querySelectorAll("span").length;
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", prevHandle);
next.addEventListener("click", nextHandle);

let stepsCount = 0;
// Loop over Html Collection from DOM initial Value
let i = 1;

// Prev Handle
function prevHandle() {
  stepsCount = stepsCount - 1;
  if (stepsCount <= 0) {
    stepsCount = 0;
    prev.classList.remove("active");
  }
  next.classList.add("active");

  if (i <= 1) i = 3;
  i = i - 2;
  const element = steps.item(i);
  const element2 = steps.item(i + 1);
  element.classList.remove("active");
  element2.classList.remove("active");
}

// Next Handle
function nextHandle() {
  stepsCount = stepsCount + 1;
  if (stepsCount >= spanCount) {
    stepsCount = spanCount;
    next.classList.remove("active");
  }
  prev.classList.add("active");

  if (i >= steps.length) i = steps.length - 2;
  const element = steps.item(i);
  const element2 = steps.item(i + 1);
  i = i + 2;
  element.classList.add("active");
  element2.classList.add("active");
}
