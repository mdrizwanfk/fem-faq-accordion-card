// Elements
const accordianQuestions = document.querySelectorAll(".question");
const accordianAnswers = document.querySelectorAll("#accordian .answer");

// Variables
let activeQuestion = "";

// Logic

// Event Handlers
const toggleAccordian = (e) => {
  const path = e.path || (e.composedPath && e.composedPath());
  const currentId = path[2].id;
  expandOneQuestion(currentId);
};

const collapseAllQuestions = ({ ignore }) => {
  accordianAnswers.forEach((answerElement) => {
    console.log("ans element: ", answerElement);
    if (answerElement.id !== ignore) answerElement.classList.remove("show");
  });
};

const expandOneQuestion = (questionNumber) => {
  collapseAllQuestions({ ignore: questionNumber });
  activeQuestion = questionNumber;
  const accordianElementHeading = document.querySelector(
    `#${questionNumber} h2`
  );
  const accordianElementImg = document.querySelector(
    `#${questionNumber} .arrow`
  );
  const answerElement = document.querySelector(`#${questionNumber} .answer`);

  accordianElementHeading.classList.toggle("bold");
  accordianElementImg.classList.toggle("collapse");
  answerElement.classList.toggle("show");
};

// Event Listeners
accordianQuestions.forEach((button) => {
  button.addEventListener("click", toggleAccordian);
});
