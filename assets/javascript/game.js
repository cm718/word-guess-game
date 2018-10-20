$(document).ready(function() {

  // Declaring my variables at the top of the page
  var wins = 0;
  var losses = 0;
  var remaining = 12;
  var guess = "";
  var answerArray = [];
  var word = "";
  var guessedLetters = [];
  var gameOver = false;
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
    "RELIC",
    "BOULDER",
    "DOOM",
    "COVENANT",
    "GRAIL",
    "INDIANA",
    "MUSEUM",
    "JONES"
  ];
  var responses = [
    "Don't look at the ark!",
    "Don't forget your hat!",
    "Just the right amount of sand!",
    "Outrun that boulder!",
    "We named the dog Indiana!",
    "He chose...poorly.",
    "Good job! Now run, the bridge is breaking!",
    "They're digging in the wrong place!",
    "These belong in a museum!",
    "Snakes...why did it have to be snakes?",
    "Shortround, get the car!"
  ];

  // ************************************************************

  // Setting the users guess to their key click
  $(this).on("keypress", function() {
    if (!gameOver){
      //transforming it to upper case
      guess = event.key.toUpperCase();
      // Runs the function guessLetter();
      guessLetter();
      // Checks to see if answerArray is equal to the chosen word.
      if (answerArray.toString().replace(/,/g, "") == word) {
        // If the user wins increase the win score
        wins = wins + 1;
        $("#wins").text(wins);
        $(".winner").css("display", "block");
        gameOver = true;
      } else {
        remaining = remaining - 1;
        $("#remaining").text(remaining);
      }
      if (remaining < 1) {
        losses = losses + 1;
        $("#losses").text(losses);
        $(".loser").css("display", "block");
        gameOver = true;
      }
    }

  });

  // ************************************************************

  var response = responses[Math.floor(Math.random() * responses.length)];
  // Declaring a function called guessLetter
  function guessLetter() {
    // This loops through the word to see if the letter chosen
    for (var j = 0; j < word.length; j++) {
      // matches any of the letters in the "word" varialbe.
      if (word[j] === guess) {
        answerArray[j] = guess;
      }
    }
    if (word[j] !== guess) {
      // Pushes their guess into the array called guess
      guessedLetters.push(guess);
      $("#guessedLetters").text(guessedLetters.join(", "));
      $("#response").text(response);
    }
    // Adds the correct letter at the correct index of the array
    $("#answerArray").text(answerArray.join(" "));
  }

  // ************************************************************

  // Declare a function to call when I want the game to reset
  function newGame() {
    // // Turn keypress back on
    gameOver = false;
    // Pick a new funny response for the end of the game.
    response = responses[Math.floor(Math.random() * responses.length)];
    // Reset the remaining letter count
    remaining = 15;
    // Reset the html for remaining guesses
    $("#remaining").text(remaining);
    // Hide the loss text
    $(".loser").css("display", "none");
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
    // Log the secret word in the console for easier debugging
    console.log(word);
    // Then changes the html to add an underscore and space for each letter
    $("#answerArray").text(answerArray.join(" "));
  }

  // ************************************************************

  // Setting the instructions for the Play Again button to run newGame();
  $("#playAgain").on("click", newGame);
  $("#again").on("click", newGame);

  // calling the newGame function so the game starts
  newGame();

});
