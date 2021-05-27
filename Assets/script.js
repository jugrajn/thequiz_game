//Time Function variables
var timeElement = document.querySelector(".time");

// Question and Answers variables
var questionEl = document.querySelector("#questionEl");
var choicesEl = document.querySelector("#choicesEl");

// Score variable
var scoreEl = document.querySelector(".score");
 // 0 represents first question in array of object

//Button variable
var startButton = document.querySelector(".start-button");

//User initial variable
var initialEl = document.querySelector("#initialEl");


//Initializer, counters

var secondsLeft;
var score=0;
var whichQuestion=0;
var timer;

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

//-------------------------------------------------------------

//Time Function: 'Timer Interval'
function startTime() {
    timeElement.setAttribute("style","display:block;");
    choicesEl.setAttribute("style","display:block;");
    questionEl.setAttribute("style","display:block;");
    secondsLeft=75;
    whichQuestion=0;
    score=0;
    startButton.disabled = true;
    showQuiz();

    timer = setInterval(function() {
    secondsLeft--;
    timeElement.textContent = secondsLeft + " seconds left until Game Over";

    if(secondsLeft <= 0 || whichQuestion === quiz.length) {
        clearInterval(timer);
   
        saveInitial();
        return;
        }

    }, 1000);
    sendMessage();
}

function sendMessage() {
    timeElement.textContent = "Game Over";
}

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
            newButton.style.display = "block";
            // Add new button element into Choice Container on HTML
            choicesEl.append(newButton);
            
        }
        return;
}

function evaluateAnswer(event){
    event.stopPropagation();
    console.log(event.target.textContent)
    console.log(quiz[whichQuestion].answer)
    if (event.target.textContent !== quiz[whichQuestion].answer) {
        secondsLeft = secondsLeft - 15;
        choicesEl.style.backgroundColor = "red"
    }   else {
        score++;
        choicesEl.style.backgroundColor = "green";

    }
    questionEl.textContent = "";

    if (whichQuestion === quiz.length-1) {
        saveInitial();
        clearInterval(timer);
    } else {
        whichQuestion++;
        showQuiz();
    }

}
//Display the score for each correct answer Create function
function saveInitial() {
    startButton.disabled = false;
    //Remove Quiz from page
 
    timeElement.setAttribute("style","display:none;");
    choicesEl.setAttribute("style","display:none;");
    questionEl.setAttribute("style","display:none;");
    
    //Display input initials and Submit Button
    initialEl.textContent = "Type in your Initials";

    // ----> Initials input 
    var userIntitial = document.createElement("input");
    userIntitial.setAttribute("class", "input");
    userIntitial.setAttribute("type", "text");

    // ----> Submit Button
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Submit");

    // Add to html
    initialEl.append(userIntitial);
    initialEl.append(submitButton);
    
    // Click Submit and star Save Score Function
    submitButton.addEventListener("click", storeScore);


    function storeScore(event) {
        event.preventDefault();
        //Call userInitial to this function
        var inputInitial = document.querySelector(".input");

        var saveMyScore = {
            score: score,       //Key:Value
            inputInitial: inputInitial.value,    //Key:Value
        };
        console.log(saveMyScore);
        localStorage.setItem("saveMyScore", JSON.stringify(saveMyScore));
        renderMessage();
        
        function renderMessage() {
            var lastScore = JSON.parse(localStorage.getItem("saveMyScore"));
            scoreEl.textContent = `Score: ${lastScore.score} Initials: ${lastScore.inputInitial}`;
        }

    }
}

//Button Event Listener  STARTS THE GAME
startButton.addEventListener("click", startTime);


