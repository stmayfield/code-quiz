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

var ans1 = document.createElement("p")
ans1.setAttribute("id", "answer-one")
ans1.textContent = "Replacement text 1";
quizBlock.appendChild(ans1)

var ans5 = document.createElement("p")
ans5.setAttribute("id", "answer-five")
ans5.textContent = "Replacement text 5";
quizBlock.appendChild(ans5)

var answer2 = document.querySelector("#answer-two");
var answer3 = document.querySelector("#answer-three");
var answer4 = document.querySelector("#answer-four");



quizBlock.hidden = false;
// answer1.textContent = "[LEGACY]Replacement text 1";
answer2.textContent = "Replacement text 2";
answer3.textContent = "Replacement text 3";
answer4.textContent = "Replacement text 4";


ans1.addEventListener("click", function () {
    alert("incorrect");
});
answer2.addEventListener("click", function () {
    alert("COreccet!");
});
answer3.addEventListener("click", function () {
    alert("incorrect");
});
answer4.addEventListener("click", function () {
    alert("incorrect");
});



quizBlock.replaceChild(ans5, ans1);




//Button animation
button01.addEventListener("mouseover", function () {
    button01.setAttribute("src", "assets/Button01-02.svg");
});
button01.addEventListener("mouseout", function () {
    button01.setAttribute("src", "assets/Button01-01.svg");
});