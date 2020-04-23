var button01 = document.querySelector("#btnStart");
var counter = document.querySelector("#counter");
var mouseOver = document.querySelector(".custom-button");
var countMessage = counter.parentElement;
var totalTime = 6




function activateTimer() {
    button01.addEventListener("click", function timer() {
        setInterval(startTimer, 1000);
        // startQuiz();
    });
};

function startTimer() {
    totalTime--;
    counter.innerHTML = totalTime

    if (totalTime === 0) {
        clearInterval(setInterval(startTimer, 1000))
        countMessage.innerHTML = "Time's Up!"
    }
};

activateTimer();

// function startQuiz() {
//     block
// };

var correct = "Correct";
var incorrect = "Incorrect";
var answerPass;
var score = 0

var quizBlock = document.querySelector(".div2");
quizBlock.hidden = false;

// var answer1 = document.querySelector("#answer-one");


function firstAnswer(input, validate, boolean) {
    var answer1 = document.createElement("p");
    answer1.setAttribute("id", "answer-one");
    answer1.textContent = input;
    quizBlock.appendChild(answer1);
    answer1.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
    });
};

function secondAnswer(input, validate, boolean) {
    var answer2 = document.createElement("p");
    answer2.setAttribute("id", "answer-two");
    answer2.textContent = input;
    quizBlock.appendChild(answer2);
    answer2.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
    });
};

function thirdAnswer(input, validate, boolean) {
    var answer3 = document.createElement("p");
    answer3.setAttribute("id", "answer-three");
    answer3.textContent = input;
    quizBlock.appendChild(answer3);
    answer3.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
    });
};

function fourthAnswer(input, validate, boolean) {
    var answer4 = document.createElement("p");
    answer4.setAttribute("id", "answer-four");
    answer4.textContent = input;
    quizBlock.appendChild(answer4);
    answer4.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
    });
};


function questionAsk(input) {
    var question1 = document.createElement("h3");
    question1.setAttribute("id", "question");
    question1.textContent = input;
    quizBlock.appendChild(question1);
}


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


questionOne();
reset();
questionTwo();
// reset();

// quizBlock.replaceChild(q2A1, q1A1);
// quizBlock.replaceChild(q2A2, q1A2);
// quizBlock.replaceChild(q2A3, q1A3);
// quizBlock.replaceChild(q2A4, q1A4);




//if answerpass === correct, then next


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