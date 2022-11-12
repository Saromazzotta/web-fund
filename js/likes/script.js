count = 9;
countTwo = 12
countThree = 9

var countElement = document.querySelector("#count");
var countElementTwo = document.querySelector("#countTwo");
var countElementThree = document.querySelector("#countThree");

function increaseLikes() {
    count++;
    countElement.innerText = count + " like(s)"
    console.log("#count")
}

function increaseLikesTwo() {
    countTwo++;
    countElementTwo.innerText = countTwo + " like(s)"
    console.log("#count-2")
}

function increaseLikesThree() {
    countThree++;
    countElementThree.innerText = countThree + " like(s)"
    console.log("#count-3")
}