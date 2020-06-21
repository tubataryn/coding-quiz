var questions = [
    {title: "Commonly used data types DO NOT include:", options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},
    {title: "The condition in an if / else statement is enclosed with _____.",
    options: ["quotes", "cutly brackets", "parenthesis", "square brackets"], 
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

function start() {
    var startQuiz = document.getElementById("intro")
    //ADD TIMER HERE
    getQuestions()
}

function getQuestions() {
    var currentTitle = questions[questionIndex]
    var displayTitle = document.getElementById("q")
    var displayOptions = document.getElementById("options")

    function defineUserAnswer() {
        console.log("calling function")
        var userAnswer = button.textContent
        console.log(userAnswer)
    }

    displayOptions.innerHTML = "";
    displayTitle.textContent = currentTitle.title
    currentTitle.options.forEach(function(option, i){
        var choiceEl = document.createElement("button")
        choiceEl.setAttribute("class", "option")
        choiceEl.setAttribute("value", option)
        choiceEl.textContent = option
        questionsSection.appendChild(choiceEl)
        displayOptions.appendChild(choiceEl)
        choiceEl.onclick=changeQuestions
        var button = document.querySelector(".option")
        console.log(button)
        button.addEventListener("click", defineUserAnswer)
    })
}


function changeQuestions() {
    questionIndex++
    getQuestions()
    
}

startButton.onclick=start
