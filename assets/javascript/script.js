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

var quizBlock = document.querySelector(".div2");
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


// for (var i = 0; i < 4, i++) {
// };


var correct = "Correct";
var incorrect = "Incorrect";
var answerPass;
var score = 0

firstAnswer("Replacement Text 1", incorrect, false);
secondAnswer("Replacement Text 2", correct, true);
thirdAnswer("Replacement Text 3", incorrect, false);
fourthAnswer("Replacement Text 4", incorrect, false);

if (answerPass === true) {
    //change Correct answer to green
    answer1.style.color = "green"

};



//if answerpass === correct, then next

quizBlock.hidden = false;
// answer1.textContent = "[LEGACY]Replacement text 1";




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