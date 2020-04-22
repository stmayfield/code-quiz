var button = document.querySelector("#btnStart");
var counter = document.querySelector("#counter");
button.addEventListener("click", function () { });
var totalTime = 10

var timer = setInterval(startTimer, 1000);


function startTimer() {
    totalTime--;
    counter.innerHTML = totalTime

    if (totalTime === 0) {
        clearInterval(timer)
        counter.parentElement.innerHTML = "Time's Up!"
    }
};


button.addEventListener("click", function () {
    alert("Test");
});