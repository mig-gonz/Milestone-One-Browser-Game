// declared variables
const mainContent = document.querySelector(".main-content");
const startBtn = document.querySelector(".start-btn");
const questionElement = document.querySelector(".question") as HTMLDivElement;
const buttons = document.querySelector(".buttons");
const nextButton = document.querySelector(".next-btn");
const img = document.querySelector(".image") as HTMLImageElement;
const score = document.querySelector(".score");
const subHeading = document.querySelector(".sub-header");
const paraText = document.querySelector(".para-text");
const animation = document.querySelector(".animation-win");
const youLost = document.querySelector(".you-lost");
const winGif = document.querySelector(".win-gif");
const loseGif = document.querySelector(".lose-gif");

let lose = document.createElement("h2");
let win = document.createElement("h2");
let points = 0;
let pointKeeper = document.querySelector(".points") as HTMLDivElement;
let randomQuestions: typeof questions;
let questionsArrayIndex: number;

// array of questions
const questions = [
  {
    image: "images/lawn-mower.png",
    question: "what is the correct price of this lawn mower?",
    answers: [
      { text: "$349" },
      { text: "$659" },
      { text: "$739" },
      { text: "$459", correct: true },
    ],
  },
  {
    image: "images/dog-food.png",
    question: "what is the correct price of this bag of dog food?",
    answers: [
      { text: "$3.86" },
      { text: "$13.58" },
      { text: "$7.89" },
      { text: "$17.99", correct: true },
    ],
  },
  {
    image: "images/egg.png",
    question: "what is the correct price of these eggs?",
    answers: [
      { text: "$4.79" },
      { text: "$12.00" },
      { text: "$9.89", correct: true },
      { text: "$6.79" },
    ],
  },
  {
    image: "images/nmd.png",
    question: "what is the correct price of this pair of addidas sneakers?",
    answers: [
      { text: "$80" },
      { text: "$99" },
      { text: "$220" },
      { text: "$120", correct: true },
    ],
  },
  {
    image: "images/velar.png",
    question: "what is the correct price of this range rover velar?",
    answers: [
      { text: "$89,000" },
      { text: "$35,000" },
      { text: "$65,000", correct: true },
      { text: "$120,000" },
    ],
  },
  {
    image: "images/couch.png",
    question: "what is the correct price of this couch?",
    answers: [
      { text: "$6,500" },
      { text: "$2,500" },
      { text: "$7,999", correct: true },
      { text: "$12,999" },
    ],
  },
  {
    image: "images/ps5.png",
    question: "what is the correct price of this PlayStation 5 controller?",
    answers: [
      { text: "$69.99", correct: true },
      { text: "$59.99" },
      { text: "$39.99" },
      { text: "$79.99" },
    ],
  },
  {
    image: "images/drone.png",
    question: "what is the correct price of this drone?",
    answers: [
      { text: "$350" },
      { text: "$369" },
      { text: "$249", correct: true },
      { text: "$450" },
    ],
  },
  {
    image: "images/headset.png",
    question: "what is the correct price of these JBL gaming headset?",
    answers: [
      { text: "$150", correct: true },
      { text: "$129" },
      { text: "$249" },
      { text: "$329" },
    ],
  },
  {
    image: "images/computer.png",
    question: "what is the correct price of this computer?",
    answers: [
      { text: "$1,199", correct: true },
      { text: "$889" },
      { text: "$1,399" },
      { text: "$1,669" },
    ],
  },
];

// start/next button event listeners
startBtn!.addEventListener("click", startGame);
nextButton!.addEventListener("click", () => {
  questionsArrayIndex++;
  nextQuestion();
});

//  start game function
function startGame() {
  questionElement!.classList.remove("hide");
  buttons!.classList.remove("hide");
  score!.classList.remove("hide");
  nextButton!.classList.remove("hide");
  img!.classList.remove("hide");

  // when restart button(start button) is clicked at the end of the game.
  lose.setAttribute("class", "hide");
  win.setAttribute("class", "hide");
  animation!.classList.add("hide");
  youLost!.classList.add("hide");
  winGif!.classList.add("hide");
  loseGif!.classList.add("hide");

  //  changes the score value
  points = 0;
  let pointKeeper: HTMLDivElement | null = document.querySelector(".points");
  if (pointKeeper !== null) {
    pointKeeper.innerText = points.toString();
  }

  // randomly displays questions
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  questionsArrayIndex = 0;

  subHeading!.classList.add("hide");
  paraText!.classList.add("hide");
  startBtn!.classList.add("hide");

  nextQuestion();
}

// next question function
function nextQuestion() {
  // resets/clears class
  // adds next button after answering questions
  reset();

  // displays questions
  showQuestion(randomQuestions[questionsArrayIndex]);
}

// reset function
function reset() {
  nextButton!.classList.add("hide");

  // loops through and removes previous buttons
  while (buttons!.firstChild) {
    buttons!.removeChild(buttons!.firstChild);
  }
}

//  function show question
function showQuestion(question: { image: any; question: any; answers: any }) {
  // targets the questions text and displays the questions in questions array
  questionElement!.innerText = question.question;

  // changes the image. displays the images in questions array
  img!.src = question.image;

  // loops through our buttons replacing them with new buttons and adding questions array content
  question.answers.forEach(
    (answer: { text: string; correct: string | undefined }) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("question-btn");

      // dataset value
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }

      button.addEventListener("click", selectedAnswer);

      // appends button to our buttons div
      buttons!.appendChild(button);
    }
  );
}

// function clear status
function removeClass(element: {
  classList: { remove: (arg0: string) => void };
}) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// selected answer function
function selectedAnswer(e: { target: any }) {
  // targets the button that is clicked
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;

  // adds points for choosing the correct answer
  if (correct) {
    points += 100;
    pointKeeper!.innerText = points.toString();
  }

  // converts buttons into an array
  Array.from(buttons!.children).forEach((button) => {
    setClass(
      button as HTMLButtonElement,
      (button as HTMLButtonElement).dataset.correct
    );
  });

  // reveals next button after question is answered untill the final question or a score of 700 is met
  if (randomQuestions.length > questionsArrayIndex + 1) {
    nextButton!.classList.remove("hide");
  } else {
    (startBtn as HTMLButtonElement).innerText = "Restart";

    startBtn!.classList.remove("hide");
    youLose();
  }

  // if you score 700 points you win
  if (points === 700) {
    youWin();
  }
}

// fucntion set class status
function setClass(element: Element, correct: any) {
  removeClass(element);

  // adds the class of correct or wrong to button elements
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// win function
function youWin() {
  img.classList.add("hide");
  questionElement.classList.add("hide");
  buttons!.classList.add("hide");
  nextButton!.classList.add("hide");

  winGif!.classList.remove("hide");
  animation!.classList.remove("hide");
  (mainContent as HTMLElement).style.background = "none";

  startBtn!.classList.remove("hide");
  (startBtn as HTMLElement).innerText = "Restart";

  win.innerText = "YOU WON!";
  win.setAttribute("class", "title");

  mainContent!.appendChild(win);
}

// lose function
function youLose() {
  img.classList.add("hide");
  questionElement.classList.add("hide");
  buttons!.classList.add("hide");
  nextButton!.classList.add("hide");

  loseGif!.classList.remove("hide");
  youLost!.classList.remove("hide");

  (mainContent as HTMLElement).style.background = "none";

  lose.innerText = "YOU LOST!";
  lose.setAttribute("class", "title");
  mainContent!.appendChild(lose);
}
