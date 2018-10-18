

$(document).ready(function() {

  // Declaring my variables at the top of the page
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


// ************************************************************

  // Setting the users guess to their key click
  $(this).on("keypress", function() {
    //transforming it to upper case
    guess = event.key.toUpperCase();
    // Runs the function guessLetter();
    guessLetter();
    // Pushes their guess into the array called guess
    guessedLetters.push(guess);
    // Changes the html to display their guesses.
    $("#guessedLetters").text(guessedLetters.join(", "));
    // Checks to see if answerArray is equal to the chosen word.
    if (answerArray.toString().replace(/,/g, "") == word) {
      // If the user wins increase the win score
      wins = wins + 1;
      $("#wins").text(wins);
      $(".winner").css("display", "block");
    }
  });

// ************************************************************

  // Declaring a function called guessLetter
  function guessLetter() {
    // This loops through the word to see if the letter chosen
    for (var j = 0; j < word.length; j++) {
      // matches any of the letters in the "word" varialbe.
      if (word[j] === guess) {
        answerArray[j] = guess;
      } 
    }
    // Adds the correct letter at the correct index of the array
    $("#answerArray").text(answerArray.join(" "));
  }

// ************************************************************

  // Declare a function to call when I want the game to reset
  function newGame() {
    // Hide the button and the winner text
    $(".winner").css("display", "none");
    // For each new game I want to reset the array of user guessed letters
    guessedLetters = [];
    // Reset the html for that array of letters as well.
    $("#guessedLetters").empty();
    // Reset the game logic for the answer array
    answerArray = [];
    // And reset the html for the answer array to an empty string.
    $("#answerArray").text("");
    // Then it chooses a random word from the words array
    word = words[Math.floor(Math.random() * words.length)];
    // Then loops through the word and creates underscores for each letter
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    console.log(word);
    // Then changes the html to add an underscore and space for each letter
    $("#answerArray").text(answerArray.join(" "));
  }

  // ************************************************************

  // Setting the instructions for the Play Again button to run newGame();
  $("#playAgain").on("click", newGame);

  // calling the newGame function so the game starts
  newGame();

});
