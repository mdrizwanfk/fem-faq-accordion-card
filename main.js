// Elements
const expandableButtons = document.querySelectorAll(".toggle");

console.log(expandableButtons);

// Variables

// Logic

// Event Handlers
const toggleAccordian = (e) => {
  console.log(e);
  const path = e.path || (e.composedPath && e.composedPath());
  const currentId = path[2].id;
  const answerElement = document.querySelector(`#${currentId} .answer`);

  e.target.classList.toggle("collapse");
  answerElement.classList.toggle("show");

  //   //   Show Answer
  //   const answerElement = document.querySelector(`#${currentId} .answer`);
  //   if (!answerElement.classList.contains("show")) {
  //     answerElement.classList.add("show");
  //     e.target.classList.toggle("collapse");
  //   } else {
  //     answerElement.classList.remove("show");
  //   }
  //   console.log(e.target.id, e.target.className);
};

// Event Listeners
expandableButtons.forEach((button) => {
  button.addEventListener("click", toggleAccordian);
});
