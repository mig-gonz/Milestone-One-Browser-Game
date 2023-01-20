// make an array of questions, 1 question per item (20 items).
// create a function that iterates through the questions displaying each following question as the user answers and moves to the next question.
// add a text box for score tracking in our questions array
// add four buttons for price answer options

const mainContent = `<h2 class="sub-header">
          Bid to Win, inspired by "The Price Is Right"
        </h2>
        <p class="para-text">
          <span class="span-one">Bid to Win</span>: an online browser game where you have to guess the price of
          each shown item. Getting the answer correct will earn you 100 points.
          You have to reach a total score of 1,000 points to win, and you only
          have 20 items to guess from. You have to earn the 1,000 points before
          or on the 20th-item question. or you lose the game, good luck!
        </p> 
        <button class="btn">Begin Game</button> `;

// my questions array
const questions = [
  `<div class="wrapper"><img class="image" src="images/bigmac.png" alt="big-mac combo">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/computer.png" alt="computer">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/couch.png" alt="couch">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/dish-soap.png" alt="dish soap">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/dog-food.png" alt="dog food">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/drone.png" alt="drone">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/egg.png" alt="eggs in a basket">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/frame.png" alt="picture frame">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/globe.png" alt="globe">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/guitar.png" alt="guitar">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/headset.png" alt="gamer headset">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/jackson8.png" alt="Lamar Jackson figurine">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/joe.png" alt="autographed joe montana football">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/lawn-mower.png" alt="lawn mower">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/nmd.png" alt="addidas nmd shoes">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/ps.png" alt="playstation console">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/ps5.png" alt="ps5 remote controller">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/tickets.png" alt="flight tickets to las vegas">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/velar.png" alt="range rover velar car">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/water.png" alt="bottled water">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button><button class="question-btn">money</button></div>
</div>
`,
];
// console.log(questions.length);
// view controller function
function switchView(e) {
  document.querySelector("#main-content").innerHTML = e;
}

// switchView(mainContent);
switchView(questions[14]);
