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
        question: "Arrays in JavaScript can be used to store?",
        choices: ["Numbers and Strings", "other Arrays", "booleans", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "What is the file extension for a Javascript file?",
        choices: [".java", ".js", ".html", ".css"],
        answer: ".js"
    },
]

// Need variable to track which Question im on in the object
var whichQuestion = 0; // 0 represents first question in array of object

//-------------------------------------------------------------

//Time Function: 'Timer Interval'
function startTime() {
    showQuiz();
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

//----------------------------------------------------------------
// Show Questions Function

function showQuiz() {
    if (whichQuestion < quizQuestions.length) {
        questionEl.textContent = quizQuestions[whichQuestion].question;
        choicesEl.textContent = "";

        for ( var i = 0; i < quizQuestions[whichQuestion].choices.length; i++) {
            var newButton = document.createElement("button");
            newButton.textContent = quizQuestions[whichQuestion].choices[i];
            newButton.addEventListener("click", function (event) {
                event.stopPropagation();
            });
        }
    }
}


//Button Event Listener
startButton.addEventListener("click", startTime);

