/**
 * Created by stephan.cattermole42 on 11/1/16.
 */
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var target = colors[Math.floor((Math.random() * 10))];
var guesses = 0;

function guess() {
    var user_guess = prompt("Choose one of the ten colors previously listed");
    guesses += 1;
    checkguess(user_guess);
}

function checkguess(user_guess) {


    if (colors.indexOf(user_guess) == -1) {
        alert("Sorry I didn't recognize your color");
        guess();
    }
    else {
        if (user_guess === target) {
            alert("Congratulations " + "It took you " + guesses + " guesses.");
            document.getElementById("Correct").style.backgroundColor = target;
            document.getElementById("game").style.borderColor = target;
            document.getElementById("game").style.color = target;
            document.getElementById("h3").style.color = target;
        }
        else {
            if (user_guess < target) {
                alert("Your guess is incorrect. Hint: Your color is alphabetically lower than mine");
            }
            if (user_guess > target) {
                alert("Your guess is incorrect. Hint: Your color is alphabetically higher than mine");
            }
            guess();
        }
    }
    //also trying to figure out how to make the answers be case insensitive
    //currently trying to get the background to change color when the answer is correct
}

