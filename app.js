// declared variables
const startBtn = document.querySelector(".start-btn");
const questionElement = document.querySelector(".question");
const buttons = document.querySelector(".buttons");
const nextButton = document.querySelector(".next-btn");
const img = document.querySelector(".image");
const score = document.querySelector(".score");
const subHeading = document.querySelector(".sub-header");
const paraText = document.querySelector(".para-text");
const btn = document.querySelector(".btn");
let points = 0;
let pointKeeper = document.querySelector(".points");
let randomQuestions, questionIndex;
// var end

// start/next button event listeners
startBtn.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  questionIndex++;
  nextQuestion();
});
// event end <><>

// our start game function
function startGame() {
  questionElement.classList.remove("hide");
  buttons.classList.remove("hide");
  score.classList.remove("hide");
  nextButton.classList.remove("hide");

  points = 0;
  pointKeeper.innerText = points;

  randomQuestions = questions.sort(() => Math.random() - 0.5);
  questionIndex = 0;

  subHeading.classList.add("hide");
  paraText.classList.add("hide");
  startBtn.classList.add("hide");

  nextQuestion();
}
// start game end  <><>

// next question function
function nextQuestion() {
  resetState();
  showQuestion(randomQuestions[questionIndex]);
}
// next question end <><>

//  function show question
function showQuestion(question) {
  questionElement.innerText = question.question;
  img.src = question.image;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("question-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
    buttons.appendChild(button);
  });
}
// show question end <><>

// fucntion reset state
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
}
// reset state end

// selected answer function
function selectedAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  if (correct) {
    points += 100;
    pointKeeper.innerText = points;
  }
  setStatusClass(document.body, correct);
  Array.from(buttons.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (randomQuestions.length > questionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startBtn.innerText = "Restart";
    startBtn.classList.remove("hide");
  }
}
// selected answer function end

// fucntion set class status
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
// set status end <><><>

// function clear status
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
//  clear status end <><>

// questions array
const questions = [
  {
    image: "images/lawn-mower.png",
    question: "what is the correct price of this lawnmower?",
    answers: [
      { text: "$349", correct: false },
      { text: "$659", correct: false },
      { text: "$739", correct: false },
      { text: "$459", correct: true },
    ],
  },
  {
    image: "images/dog-food.png",
    question: "what is the correct price of this bag of dog food?",
    answers: [
      { text: "$3.86", correct: false },
      { text: "$13.58", correct: true },
      { text: "$7.89", correct: false },
      { text: "$17.99", correct: false },
    ],
  },
  {
    image: "images/egg.png",
    question: "what is the correct price of these eggs?",
    answers: [
      { text: "$4.79", correct: false },
      { text: "$12.00", correct: false },
      { text: "$9.89", correct: true },
      { text: "$6.79", correct: false },
    ],
  },
  {
    image: "images/nmd.png",
    question: "what is the correct price of this pair of addidas sneakers?",
    answers: [
      { text: "$80", correct: false },
      { text: "$99", correct: false },
      { text: "$220", correct: false },
      { text: "$120", correct: true },
    ],
  },
  {
    image: "images/velar.png",
    question: "what is the correct price of this range rover velar?",
    answers: [
      { text: "$89,000", correct: false },
      { text: "$35,000", correct: false },
      { text: "$65,000", correct: true },
      { text: "$120,000", correct: false },
    ],
  },
];
