$(document).ready(function () {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 400);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(100, counter[j], j);
    }
});





// Declaring variables for each IDS
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");
var number = 1100;

// Function to change color of the number 
// If number is less than 0 color is red, if more than 0 color is green and if 0, color is white.

function changeColor(number) {
    var color = "";
    if (number < 0) {
        color = "";
    } else if (number > 0) {
        color = "";
    } else {
        color = "";
    }
    return color;
}

btnIncrement.addEventListener("click", function () {
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});






var click = document.querySelector("#click");
var reset = document.querySelector("#reset");
var result = document.querySelector("#result");
var counter = 50;

click.addEventListener('click', function () {
    counter++;
    result.innerHTML = `${counter}`;
});






var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})