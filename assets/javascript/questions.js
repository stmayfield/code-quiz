function questionAsk(input) {
    var question = document.createElement("h3");
    question.setAttribute("id", "question");
    question.textContent = input;
    quizBlock.appendChild(question);
}

function firstAnswer(input, validate, boolean, nextQuestion) {
    var answer1 = document.createElement("p");
    answer1.setAttribute("id", "answer-one");
    answer1.textContent = input;
    quizBlock.appendChild(answer1);
    answer1.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
        } else if (answerPass !== true) {
            subtractTime();
        }
    });
};

function secondAnswer(input, validate, boolean, nextQuestion) {
    var answer2 = document.createElement("p");
    answer2.setAttribute("id", "answer-two");
    answer2.textContent = input;
    quizBlock.appendChild(answer2);
    answer2.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
        } else if (answerPass !== true) {
            subtractTime();
        }
    });
};

function thirdAnswer(input, validate, boolean, nextQuestion) {
    var answer3 = document.createElement("p");
    answer3.setAttribute("id", "answer-three");
    answer3.textContent = input;
    quizBlock.appendChild(answer3);
    answer3.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
        } else if (answerPass !== true) {
            subtractTime();
        }
    });
};

function fourthAnswer(input, validate, boolean, nextQuestion) {
    var answer4 = document.createElement("p");
    answer4.setAttribute("id", "answer-four");
    answer4.textContent = input;
    quizBlock.appendChild(answer4);
    answer4.addEventListener("click", function () {
        alert(validate);
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
        } else if (answerPass !== true) {
            subtractTime();
        }
    });
};

