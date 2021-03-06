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
var nameInput = document.getElementById("name")
var submitButton = document.getElementById("submit")
var score = timeLeft
var displayName = localStorage.getItem("name")
var nameSpan = document.getElementById("name-span")
var msgDiv = document.getElementById("msg")
var finalScore = ""
var scoreSpan = document.getElementById("user-score")

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
            //finalScore = timeLeft

        }
        else{

            finalScore = timeLeft

          // endGame()
           
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
    });
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
    console.log("THis is how long our array ",questions.length)

    if(questionIndex>4) {
        endGame()
    }
    else {
    getQuestions()}

}

function endGame() {
    //alert("Game Over")
    document.getElementById("questions").innerHTML=""
    finalScore =timerEl.innerHTML
    timerEl.innerHTML=""
    console.log("Your final score: ", finalScore)

    highScores()

}////end endGaame fct def

function highScores() {
    if(displayName===undefined){
        return
    }
    else{
        nameSpan.innerHTML=displayName
        scoreSpan.innerHTML=finalScore
    }
}

function displayMessage(type, message) {
    msgDiv.textContent = message
    msgDiv.setAttribute("class", type);
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    console.log(name)
    if(name === "") {
        displayMessage("error", "Name cannot be blank");
    }
    else {
        displayMessage("success", "Name added");

        localStorage.setItem("name", name);
        highScores()
    }
});

startButton.onclick=start
