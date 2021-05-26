//Time Function variables
var timeElement = document.querySelector(".time");
var secondsLeft = 75;

// Question and Answers variables
var questionEl = document.querySelector("#questionEl");
var choicesEl = document.querySelector("#choicesEl");

// Score variable
var scoreEl = document.querySelector(".score");
var score = 0;

//Button variable
var startButton = document.querySelector(".start-button");

//Questions of Object with Answer Value Arrays

let quiz = [
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
        answer: "Key Value Pairs"
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
    }
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

    if(secondsLeft <= 0 || whichQuestion === quiz.length) {
        clearInterval(timerInterval);
        storeScore();
        }

    }, 1000);
}

// function sendMessage() {
//     timeElement.textContent = "Game Over";
// }

//----------------------------------------------------------------
// Show Questions Function

function showQuiz() {
        questionEl.textContent = quiz[whichQuestion].question;
        choicesEl.textContent = "";

        for ( let i = 0; i < quiz[whichQuestion].choices.length; i++) {
            //Create button elements to each choice for each question and append on html
            var newButton = document.createElement("button"); 
            newButton.textContent = quiz[whichQuestion].choices[i];
            newButton.setAttribute("data-id", i);
            newButton.addEventListener("click", evaluateAnswer);

            choicesEl.append(newButton);
        }
    
}

function evaluateAnswer(event){
    event.stopPropagation();
    console.log(event.target.textContent)
    console.log(quiz[whichQuestion].answer)
    if (event.target.textContent !== quiz[whichQuestion].answer) {
        secondsLeft = secondsLeft - 15;
        score = score - 10;
    }   else {
        score = score + 100;
    }
    questionEl.textContent = "";

    if (whichQuestion === quiz.length) {
        //
        return;
    } else {
        whichQuestion++;
        showQuiz();
    }

}



//Button Event Listener
startButton.addEventListener("click", startTime);

