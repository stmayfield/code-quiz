var button01 = document.querySelector("#btnStart");
var counter = document.querySelector("#counter");
var mouseOver = document.querySelector(".custom-button");
button01.addEventListener("click", function () { });
var totalTime = 11






button01.addEventListener("click", function () {
    setInterval(startTimer, 1000);
});
button01.addEventListener("mouseover", function () {
    button01.setAttribute("src", "assets/Button01-02.svg");
});
button01.addEventListener("mouseout", function () {
    button01.setAttribute("src", "assets/Button01-01.svg");
});

function startTimer() {
    totalTime--;
    counter.innerHTML = totalTime

    if (totalTime === 0) {
        clearInterval(setInterval(startTimer, 1000))
        counter.parentElement.innerHTML = "Time's Up!"
    }
};