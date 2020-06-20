var questions = [{
    title: "Commonly used data types DO NOT include:", options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},
    {title: "The condition in an if / else statement is enclosed with _____.",
    options: ["quotes", "cutly brackets", "parenthesis", "square brackets"], 
    answer: "parenthesis"
},

]                             
var questionsSection = document.getElementById("questions")
var startButton = document.getElementById("btn")
var questionIndex = 0

function start() {
    var startQuiz = document.getElementById("intro")
    //ADD TIMER HERE
    getQuestions()
}

function getQuestions() {
    var currentTitle = questions[questionIndex]
    var displayTitle = document.getElementById("q")
    var displayOptions = document.getElementById("options")
    
    displayTitle.textContent = currentTitle.title
    currentTitle.options.forEach(function(option, i){
        var choiceEl = document.createElement("button")
        choiceEl.setAttribute("class", "option")
        choiceEl.setAttribute("value", option)
        choiceEl.textContent = option
        questionsSection.appendChild(choiceEl)
        choiceEl.onclick=changeQuestions
    })
}

function changeQuestions() {
    questionIndex++
    getQuestions()
    if (questions[questionIndex].value == answer) {
        alert("correct!")
    }
    else {alert("wrong")}
    
}

startButton.onclick=start
