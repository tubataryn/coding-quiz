var questions = [
    {title: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},
    {title: "The condition in an if / else statement is enclosed with _____.",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"], 
    answer: "parenthesis"},
    {title: "Arrays in JavaScript can be used to store _____.", 
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"},
    {title: "String values must be enclosed within _____ when being assigned to variables",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"},
    {title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"},
]

var questionsSection = document.getElementById("questions")
var startButton = document.getElementById("btn")
var questionIndex = 0
var userAnswer
var timerEl = document.getElementById("countdown")
var timeLeft = 60;

function start() {
    var startQuiz = document.getElementById("intro")
    getQuestions()
    startTimer()
}

function startTimer() {
    
    var timeInterval = setInterval(function() {
        timeLeft = timeLeft-1
        if(timeLeft>=1) {
            timerEl.innerHTML= +timeLeft
        }
        else{
           alert("You lose!")
           return
        }
    } , 1000);
}

function getQuestions() {
    var currentTitle = questions[questionIndex]
    var displayTitle = document.getElementById("q")
    var displayOptions = document.getElementById("options")

    

    displayOptions.innerHTML = "";
    displayTitle.textContent = currentTitle.title
    currentTitle.options.forEach(function(option, i){
        var choiceEl = document.createElement("button")
        choiceEl.setAttribute("class", "option")
        choiceEl.setAttribute("value", option)
        choiceEl.textContent = option
        questionsSection.appendChild(choiceEl)
        displayOptions.appendChild(choiceEl)
        choiceEl.onclick=questionClick
        var button = document.querySelector(".option")
        console.log(button)
        button.addEventListener("click", questionClick)
    })
}

function questionClick() {
    var guess = (this.value)
    var answer = (questions[questionIndex].answer)
    if (guess===answer) {
        alert("correct")
    }
    else {
        alert("wrong")
        timeLeft = timeLeft-10
    }
    questionIndex++
    getQuestions()
}

function highScores() {
    var nameInput = document.getElementById("name")
    
}


startButton.onclick=start
