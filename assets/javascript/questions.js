function questionAsk(input) {
    var question1 = document.createElement("h3");
    question1.setAttribute("id", "question");
    question1.textContent = input;
    quizBlock.appendChild(question1);
}

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

