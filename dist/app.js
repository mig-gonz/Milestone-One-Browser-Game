"use strict";
const mainContent = document.querySelector(".main-content");
const startBtn = document.querySelector(".start-btn");
const questionElement = document.querySelector(".question");
const buttons = document.querySelector(".buttons");
const nextButton = document.querySelector(".next-btn");
const img = document.querySelector(".image");
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
let pointKeeper = document.querySelector(".points");
let randomQuestions;
let questionsArrayIndex;
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
startBtn.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    questionsArrayIndex++;
    nextQuestion();
});
function startGame() {
    questionElement.classList.remove("hide");
    buttons.classList.remove("hide");
    score.classList.remove("hide");
    nextButton.classList.remove("hide");
    img.classList.remove("hide");
    lose.setAttribute("class", "hide");
    win.setAttribute("class", "hide");
    animation.classList.add("hide");
    youLost.classList.add("hide");
    winGif.classList.add("hide");
    loseGif.classList.add("hide");
    points = 0;
    let pointKeeper = document.querySelector(".points");
    if (pointKeeper !== null) {
        pointKeeper.innerText = points.toString();
    }
    randomQuestions = questions.sort(() => Math.random() - 0.5);
    questionsArrayIndex = 0;
    subHeading.classList.add("hide");
    paraText.classList.add("hide");
    startBtn.classList.add("hide");
    nextQuestion();
}
function nextQuestion() {
    reset();
    showQuestion(randomQuestions[questionsArrayIndex]);
}
function reset() {
    nextButton.classList.add("hide");
    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild);
    }
}
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
function removeClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}
function selectedAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    if (correct) {
        points += 100;
        pointKeeper.innerText = points.toString();
    }
    Array.from(buttons.children).forEach((button) => {
        setClass(button, button.dataset.correct);
    });
    if (randomQuestions.length > questionsArrayIndex + 1) {
        nextButton.classList.remove("hide");
    }
    else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide");
        youLose();
    }
    if (points === 700) {
        youWin();
    }
}
function setClass(element, correct) {
    removeClass(element);
    if (correct) {
        element.classList.add("correct");
    }
    else {
        element.classList.add("wrong");
    }
}
function youWin() {
    img.classList.add("hide");
    questionElement.classList.add("hide");
    buttons.classList.add("hide");
    nextButton.classList.add("hide");
    winGif.classList.remove("hide");
    animation.classList.remove("hide");
    mainContent.style.background = "none";
    startBtn.classList.remove("hide");
    startBtn.innerText = "Restart";
    win.innerText = "YOU WON!";
    win.setAttribute("class", "title");
    mainContent.appendChild(win);
}
function youLose() {
    img.classList.add("hide");
    questionElement.classList.add("hide");
    buttons.classList.add("hide");
    nextButton.classList.add("hide");
    loseGif.classList.remove("hide");
    youLost.classList.remove("hide");
    mainContent.style.background = "none";
    lose.innerText = "YOU LOST!";
    lose.setAttribute("class", "title");
    mainContent.appendChild(lose);
}
