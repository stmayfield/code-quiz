var firstPage = document.querySelector(".div3");
var counter = document.querySelector("#counter");
var mouseOver = document.querySelector(".custom-button");
var countMessage = counter.parentElement;
var totalTime = 61

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



//on click, validate, then unhide
// green if true click
// red if false click


// Timer begins when "Start Quiz" button01 is pushed
function startTimer() {
    var interval = setInterval(countdown, 1000);

    function countdown() {
        totalTime--;
        counter.innerHTML = totalTime;

        if (totalTime === 0) {
            stopTimer();
        }
    }
    function stopTimer() {
        clearInterval(interval)
        countMessage.innerHTML = "Time's Up!"
    }

}
button01.addEventListener("click", beginQuiz);

function beginQuiz() {
    startTimer();
    questionOne();
    button01.remove();
    button02.hidden = false;

}


function subtractTime() {
    totalTime = totalTime - 10;
};

button02.addEventListener("click", subtractTime);

var correct = "Correct";
var incorrect = "Incorrect";
var answerPass;
var score = 0

var quizBlock = document.querySelector(".div2");
quizBlock.hidden = false;

// var answer1 = document.querySelector("#answer-one");

//Question 1 answers options

//Remove elements
function reset() {
    for (i = 0; i < 5; i++) {
        quizBlock.removeChild(quizBlock.childNodes[11])
    }
};

function questionOne() {
    questionAsk("Question 1: What is the first question?");
    firstAnswer("Replacement Text 1", incorrect, false);
    secondAnswer("Replacement Text 2", correct, true);
    thirdAnswer("Replacement Text 3", incorrect, false);
    fourthAnswer("Replacement Text 4", incorrect, false);
    if (answerPass === true) {
        //change Correct answer to green
        alert("true");
    };
}

//Question 2 answer options
function questionTwo() {
    questionAsk("Question 2: What is the second question?");
    firstAnswer("QUESTION 2 Replacement Text 1", incorrect, false);
    secondAnswer("QUESTION 2 Replacement Text 2", incorrect, false);
    thirdAnswer("QUESTION 2 Replacement Text 3", incorrect, false);
    fourthAnswer("QUESTION 2 Replacement Text 4", correct, true);
}


//after correct answer is clicked, then add 1 to run, reset()
//after incorrect answer is clicked, minus 10 seconds from clock (or 1 from score)
// reset();
//trigger questionTwo()
// questionTwo();
//after correct answer is clicked, then add 1 to run, reset()
//after incorrect answer is clicked, minus 10 seconds from clock (or 1 from score)
// reset();
//at end of last question, display score, form for initials
//store initials and score in localStorage
//Display score in new </div>

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


//bonus: feed questions and answers into variables from outside sources? API?