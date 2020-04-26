var firstPage = document.querySelector(".div3");
var counter = document.querySelector("#counter");
var mouseOver = document.querySelector(".custom-button");
var alertDiv = document.body.firstElementChild.firstElementChild;
var div2 = document.querySelector(".div2")
var div4 = document.querySelector(".div4")
var countMessage = counter.parentElement;
var totalTime = 91
var score = 0

var button01 = document.createElement("img");
button01.setAttribute("class", "custom-button");
button01.setAttribute("id", "btnStart");
button01.setAttribute("src", "assets/Button01-01.svg");
button01.setAttribute("height", "35px");
firstPage.appendChild(button01);

var button02 = document.createElement("img");
button02.setAttribute("class", "custom-button");
button02.setAttribute("id", "btnStart");
button02.setAttribute("src", "assets/Button01-01.svg");
button02.setAttribute("height", "35px");
firstPage.appendChild(button02);
button02.hidden = true;

var alertGreen = document.createElement("div");
alertGreen.setAttribute("class", "alert alert-success");
alertGreen.setAttribute("role", "alert");
alertGreen.textContent = "Correct!";
alertDiv.appendChild(alertGreen);
alertGreen.hidden = true;


var alertRed = document.createElement("div");
alertRed.setAttribute("class", "alert alert-danger");
alertRed.setAttribute("role", "alert");
alertRed.textContent = "Try Again!";
alertDiv.appendChild(alertRed);
alertRed.hidden = true;

// Timer begins when "Start Quiz" button01 is pushed
function startTimer() {
    var interval = setInterval(countdown, 1000);

    function countdown() {
        totalTime--;
        counter.innerHTML = totalTime;

        if (totalTime <= 0) {
            stopTimer();
        }
    }
    function stopTimer() {
        clearInterval(interval)
        countMessage.innerHTML = "End of Quiz"
        countMessage.style.fontSize = "75px"
        div2.hidden = true
        div4.hidden = false;
        scorePage();
    }

}

var initialize = false;

button01.addEventListener("click", beginQuiz);

function beginQuiz() {
    startTimer();
    questionOne();
    button01.remove();
    answerPass === false;
    initialize = true;
};

function endQuiz() {
    score += 1;
    totalTime = totalTime - 91
}

function subtractTime() {
    totalTime = totalTime - 10;
};

button02.addEventListener("click", subtractTime);

var answerPass;
var quizBlock = document.querySelector(".div2");
quizBlock.hidden = false;
div4.hidden = true;

function scorePage() {

    var scorePage = document.createElement("h3");
    scorePage.setAttribute("id", "question");
    scorePage.textContent = "Your score is: " + score + " out of 9";
    div4.appendChild(scorePage);
    alertGreen.hidden = true;
    alertRed.hidden = true;
}

var initials = document.getElementById("initials");
var scoreLog = document.getElementById("score");
var scoreButton = document.getElementById("scrButton");
var retry = document.getElementById("retry");
var output = document.querySelector(".output");
var iniList = document.querySelector(".initials-list");
var scoreList = document.getElementById("score-list");
var highScores = document.querySelector(".high-scores")

function newEntry() {

    for (var i = 0; i < localStorage.length; i++) {

        var ini = localStorage.key(i);
        var val = localStorage.getItem(ini)

        var scoreLine = document.createElement("div");
        scoreLine.setAttribute("class", "initials-list");
        scoreLine.textContent = val + " ";
        output.appendChild(scoreLine);
    }
}

scoreButton.addEventListener("click", function () {
    function entrySet() {
        var ini = initials.value;

        localStorage.setItem("initials", ini)
        localStorage.setItem("score", score)
    }
    entrySet();
    newEntry();
})

function retryQuiz() {
    retry = document.getElementById("retry");
    retry.addEventListener("click", reset)
    retry.addEventListener("click", beginQuiz)
}

retryQuiz();

//Button animation
function animateButton01() {
    button01.addEventListener("mouseover", function () {
        button01.setAttribute("src", "assets/Button01-02.svg");
    });
    button01.addEventListener("mouseout", function () {
        button01.setAttribute("src", "assets/Button01-01.svg");
    });
}

animateButton01();

