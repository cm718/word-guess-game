$(document).ready(function(){

  // Declaring my variables at the top of the page
  var gameOver = false;
  var winGame = false;
  var wins = 0;
  var guess = "";
  var answerArray = [];
  var words = [
    "WHIP",
    "HAT",
    "GUN",
    "ARTIFACTS",
    "MARION",
    "SNAKES",
    "INDIANA",
    "MUSEUM",
    "JONES"
  ];
  var word = "";
  var remainingLetters;
  var guessedLetters = [];

  //*******************************************
  // setting the logic for the keypress guesses
  //*******************************************

  $(this).on("keypress", function(event) {
    guess = event.key.toUpperCase();
    console.log(guess);
    guessLetter();
    youWin();
  })

  // looping through the chosen word
  // and making an array of underscores
  function newGame() {
    guessedLetters = [];
    gameOver = false;
    winGame = false;
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    remainingLetters = word.length;
  }

  // Declaring a function called guessLetter
  function guessLetter() {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters = remainingLetters - 1;
        console.log("remainingLetters : " + remainingLetters);
      }
    }
    $("#answerArray").text(answerArray.join(" "));
  }

  // calling the newGame function so the game starts
  // and guessLetter so that it prints the underscores
  newGame();
  guessLetter();

  // // update the win counter when the state of win is true
  // // and then update the #wins id tag in the browser
  function youWin() {
    if (remainingLetters === 0) {
      gameOver === true;
      wins = wins + 1;
      winGame === true;
      $("#wins").text(wins);
      console.log(remainingLetters);
      }
    }
});
