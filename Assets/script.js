//Time Function variables
var timeElement = document.querySelector(".time");
var secondsLeft = 5;

//Button variable
var startButton = document.querySelector(".start-button");

//Questions of Object with Answer Value Arrays




//-------------------------------------------------------------

//Time Function: 'Timer Interval'
function startTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeElement.textContent = secondsLeft + " seconds left until Game Over";

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        return;
        }

    }, 1000);
}

function sendMessage() {
    timeElement.textContent = "Game Over";
}

//Button Event Listener
startButton.addEventListener("click", startTime);

