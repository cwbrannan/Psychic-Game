  
//VARIABLES
    
    var allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var guesses = [];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;


// MAIN CODE
// Listens for event and Collects Letters
    addEventListener("keydown", function(event) {

      //When a key is pressed its stored in var userGuess
        var userGuess = event.key; 
        var compGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
        console.log(compGuess);
        console.log(event.key);

      //Stores event.key in guesses array and prints it to the screen
        guesses.push(event.key);   
        document.querySelector('#guessedLetters').innerHTML = "Guessed letters: " + guesses;
        console.log(guesses);

      //UPDATES SCORE BASED ON CORRECT OR INCORRECT GUESS
        if (compGuess === event.key) {
            wins++;
        } else if (compGuess != event.key) {
            losses++;
            guessesLeft--;
    //prints guessed letters

            
    //PRINTS RESULTS OF IF STATEMENTS TO HTML #game <div>
            var html = "<p>wins: " + wins + "</p>" +
                "<p> losses: " + losses + "</p>" +
                "<p> guesses left: " + guessesLeft + "</p>"
                "<p> guessed letters: "+ guesses + "</p>";

            document.querySelector('#game').innerHTML = html;
        }

     //RESET VARIABLES TO ORIGINAL VALUES WHEN CONDITIONS ARE MET 
        if (guessesLeft === 0) {
            wins = 0;
            losses = 0;
            guessesLeft = 10;
            guesses = [];
     //PRINTS RESET VALUES TO #game <div>
            var pageReset = "<p>wins: " + wins + "</p>" +
                "<p> losses: " + losses + "</p>" +
                "<p> guesses left: " + guessesLeft + "</p>";             

            document.querySelector('#game').innerHTML = pageReset;
        }

    });