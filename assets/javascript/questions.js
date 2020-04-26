function questionAsk(input) {
    var question = document.createElement("h3");
    question.setAttribute("id", "question");
    question.textContent = input;
    quizBlock.appendChild(question);
}

function firstAnswer(input, boolean, nextQuestion) {
    var answer = document.createElement("p");
    answer.setAttribute("id", "answer-one");
    answer.textContent = input;
    quizBlock.appendChild(answer);
    answer.addEventListener("click", function () {
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
            score += 1;
            alertGreen.hidden = false
            alertRed.hidden = true
        } else if (answerPass !== true) {
            subtractTime();
            alertGreen.hidden = true
            alertRed.hidden = false
        }
    });
};

function secondAnswer(input, boolean, nextQuestion) {
    var answer = document.createElement("p");
    answer.setAttribute("id", "answer-two");
    answer.textContent = input;
    quizBlock.appendChild(answer);
    answer.addEventListener("click", function () {
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
            score += 1;
            alertGreen.hidden = false
            alertRed.hidden = true
        } else if (answerPass !== true) {
            subtractTime();
            alertGreen.hidden = true
            alertRed.hidden = false
        }
    });
};

function thirdAnswer(input, boolean, nextQuestion) {
    var answer = document.createElement("p");
    answer.setAttribute("id", "answer-three");
    answer.textContent = input;
    quizBlock.appendChild(answer);
    answer.addEventListener("click", function () {
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
            score += 1;
            alertGreen.hidden = false
            alertRed.hidden = true
        } else if (answerPass !== true) {
            subtractTime();
            alertGreen.hidden = true
            alertRed.hidden = false
        }
    });
};

function fourthAnswer(input, boolean, nextQuestion) {
    var answer = document.createElement("p");
    answer.setAttribute("id", "answer-four");
    answer.textContent = input;
    quizBlock.appendChild(answer);
    answer.addEventListener("click", function () {
        answerPass = boolean;
        if (answerPass === true) {
            nextQuestion();
            score += 1;
            alertGreen.hidden = false
            alertRed.hidden = true
        } else if (answerPass !== true) {
            subtractTime();
            alertGreen.hidden = true
            alertRed.hidden = false
        }
    });
};

function reset() {
    for (i = 0; i < 5; i++) {
        quizBlock.removeChild(quizBlock.childNodes[1])
    }
};

function questionOne() {
    questionAsk("Who was originally going to play Shrek?");
    firstAnswer("Larry King", false);
    secondAnswer("Chris Farley", true, questionTwo);
    thirdAnswer("Jerry Seinfeld", false);
    fourthAnswer("Ewen McGregor", false);
};

function questionTwo() {
    reset();
    questionAsk("What animal chased Shrek’s art director (Douglas Rogers) around while he was doing research for Shrek’s Swamp?");
    firstAnswer("Bunny", false);
    secondAnswer("Deer", false);
    thirdAnswer("Alligator", true, questionThree);
    fourthAnswer("Crocodile", false);
};

function questionThree() {
    reset();
    questionAsk("Who was the star of cool world?");
    firstAnswer("Jim Carey", false);
    secondAnswer("Robert Duvall", false);
    thirdAnswer("Brad Pitt", true, questionFour);
    fourthAnswer("Ewen McGregor", false);
};

function questionFour() {
    reset();
    questionAsk("How many Smash Mouth songs are in the Shrek franchise?");
    firstAnswer("1", true, questionFive);
    secondAnswer("2", false);
    thirdAnswer("3", false);
    fourthAnswer("The entire discography", false);
};

function questionFive() {
    reset();
    questionAsk("In Shrek (2001), what does Donkey want to make for Shrek in the morning?");
    firstAnswer("Waffles", true, questionSix);
    secondAnswer("Pancakes", false);
    thirdAnswer("Cereal", false);
    fourthAnswer("A smoothy", false);
};

function questionSix() {
    reset();
    questionAsk("Who has a giant version of himself in Shrek 2 (2004)?");
    firstAnswer("Donkey", false);
    secondAnswer("Fiona", false);
    thirdAnswer("Pinocchio", false);
    fourthAnswer("Gingerbread Man", true, questionSeven);
};

function questionSeven() {
    reset();
    questionAsk("What was the triggering event of the first World War?");
    firstAnswer("The Great Depression", false);
    secondAnswer("Worker strikes", false);
    thirdAnswer("The assassination of Archduke Franz Ferdinand", true, questionEight);
    fourthAnswer("The premiere of Shrek", false);
};

function questionEight() {
    reset();
    questionAsk("What was the top grossing movie in the Shrek Franchise?");
    firstAnswer("Shrek (2001)", false);
    secondAnswer("Shrek 2 (2004)", true, endQuiz);
    thirdAnswer("Shrek the Third (2007)", false);
    fourthAnswer("Shrek Forever After (2010)", false);
};

// function question() {
//     reset();
//     questionAsk("question");
//     firstAnswer("answer", false);
//     secondAnswer("answer", false);
//     thirdAnswer("answer", false);
//     fourthAnswer("answer", false);
// };
