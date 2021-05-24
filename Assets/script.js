//Time Function variables
var timeElement = document.querySelector(".time");
var secondsLeft = 5;

// Question and Answers variables
var questionEl = document.querySelector("#questionEl");
var choicesEl = document.querySelector("#choicesEl");

//Button variable
var startButton = document.querySelector(".start-button");

//Questions of Object with Answer Value Arrays

let quizQuestions = [
    {
        question: "Commonly used data types DO NOT include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in a if/else statement is enclosed within an __",
        choices: ["Quotes", "Curly Brackets", "Parantheses", "Square Brackets"],
        answer: "Parantheses"
    },
    {
        question: "What do we call properties inside an object?",
        choices: ["Methods", "Functions", "Element Names", "Key Value Pairs"],
        answer: "Kay Value Pairs"
    },
    {
        question: "Commonly used data types DO NOT include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "Commonly used data types DO NOT include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
]



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

