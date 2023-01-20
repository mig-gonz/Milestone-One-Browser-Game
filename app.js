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
          or on the 20th-item question, or you lose the game, good luck!
        </p> 
        <button class="btn">Begin Game</button> `;

// my questions array
const questions = [
  `<div class="wrapper"><img class="image" src="images/bigmac.png" alt="big-mac combo">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$4.29</button><button class="question-btn">$7.89</button><button class="question-btn">$2.99</button><button class="question-btn">$6.29</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/computer.png" alt="computer">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$1,289</button><button class="question-btn">$746</button><button class="question-btn">$1,100</button><button class="question-btn">$999</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/couch.png" alt="couch">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$800</button><button class="question-btn">$7,500</button><button class="question-btn">$16,800</button><button class="question-btn">$8,476</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/dish-soap.png" alt="dish soap">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$2.99</button><button class="question-btn">$3.99</button><button class="question-btn">$4.19</button><button class="question-btn">$2.89</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/dog-food.png" alt="dog food">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$14.99</button><button class="question-btn">$7.89</button><button class="question-btn">$23</button><button class="question-btn">$16.79</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/drone.png" alt="drone">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$299</button><button class="question-btn">$646</button><button class="question-btn">$500</button><button class="question-btn">$259</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/egg.png" alt="eggs in a basket">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$39.99</button><button class="question-btn">$13.69</button><button class="question-btn">$10</button><button class="question-btn">$6.99</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/frame.png" alt="picture frame">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$1,400</button><button class="question-btn">$9,900</button><button class="question-btn">$16,488</button><button class="question-btn">$7,400</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/globe.png" alt="globe">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$13</button><button class="question-btn">$9</button><button class="question-btn">$22</button><button class="question-btn">$36</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/guitar.png" alt="guitar">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$1,800</button><button class="question-btn">$700</button><button class="question-btn">$489</button><button class="question-btn">$1,300</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/headset.png" alt="gamer headset">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$180</button><button class="question-btn">$422</button><button class="question-btn">$389</button><button class="question-btn">$120</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/jackson8.png" alt="Lamar Jackson figurine">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$32</button><button class="question-btn">$18</button><button class="question-btn">$8.56</button><button class="question-btn">$19.89</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/joe.png" alt="autographed joe montana football">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$600</button><button class="question-btn">$32,000</button><button class="question-btn">$1,600</button><button class="question-btn">$14,089</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/lawn-mower.png" alt="lawn mower">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$349</button><button class="question-btn">$659</button><button class="question-btn">$739</button><button class="question-btn">$459/button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/nmd.png" alt="addidas nmd shoes">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$120</button><button class="question-btn">$160</button><button class="question-btn">$100</button><button class="question-btn">$220</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/ps.png" alt="playstation console">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$29</button><button class="question-btn">$39</button><button class="question-btn">$25</button><button class="question-btn">$19</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/ps5.png" alt="ps5 remote controller">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$59.99</button><button class="question-btn">$79</button><button class="question-btn">$45</button><button class="question-btn">$69.99</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/tickets.png" alt="flight tickets to las vegas">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$229</button><button class="question-btn">$400</button><button class="question-btn">$456</button><button class="question-btn">$339</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/velar.png" alt="range rover velar car">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$32,000</button><button class="question-btn">$65,000</button><button class="question-btn">$75,000</button><button class="question-btn">$49,999</button><p class="score">score:</p></div>
</div>
`,
  `<div class="wrapper"><img class="image" src="images/water.png" alt="bottled water">
<h4 class="question">What is the correct price of $/{item name}</h4><div class="buttons">
<button class="question-btn">$.79</button><button class="question-btn">$.69</button><button class="question-btn">$1.99</button><button class="question-btn">$1.29</button><p class="score">score:</p></div>
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
