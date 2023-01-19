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

// view controller function
function switchView(e) {
  document.querySelector("#main-content").innerHTML = e;
}

switchView(mainContent);
