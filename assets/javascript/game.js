

$(document).ready(function() {

  // Declaring my variables at the top of the page
  var gameOver = false;
  var winGame = false;
  var wins = 0;
  var guess = "";
  var answerArray = [];
  var words = [
    "WHIP",
    "HAT",
    "ARK",
    "SHORTROUND",
    "CRUSADE",
    "TEMPLE",
    "GUN",
    "ARTIFACTS",
    "MARION",
    "SNAKES",
    "INDIANA",
    "MUSEUM",
    "JONES"
  ];
  var word = "";
  var guessedLetters = [];

  //*******************************************
  // setting the logic for the game
  //*******************************************


  //setting the users guess to their key click
  //and transforming it to upper case
  $(this).on("keypress", function(event) {
    guess = event.key.toUpperCase();
    guessLetter();
    guessedLetters.push(guess);
    $("#guessedLetters").text(guessedLetters.join(", "));
    if (answerArray.toString().replace(/,/g,"") == word) {
      wins = wins + 1;
      winGame === true;
      $("#wins").text(wins);
      alert("You win! Want to play again?")
  }
  });

  $("#playAgain").on("click", newGame);

  // looping through the chosen word
  // and making an array of underscores
  function newGame() {
    guessedLetters = [];
    $("#guessedLetters").empty();
    answerArray = [];
    $("#answerArray").text("");
    word = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    console.log(word);
    $("#answerArray").text(answerArray.join(" "));
  }

  // Declaring a function called guessLetter
  function guessLetter() {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
      }
    }
    $("#answerArray").text(answerArray.join(" "));
  }

  // calling the newGame function so the game starts
  // and guessLetter so that it prints the underscores
  newGame();


});
