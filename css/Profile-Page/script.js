var changeElement = document.querySelector("#name")

var nameTracker = document.querySelector("#todd")
var acceptElement = document.querySelector("#accept-1")
var closeElement = document.querySelector("#close-1")

var toddNameTracker = document.querySelector("#phill")
var phillAcceptElement = document.querySelector("#accept-2")
var phillCloseElement = document.querySelector("#close-2")

var requestTracker = document.querySelector("#requesttracker")
count = 2

var connectionTracker = document.querySelector("#connectiontracker")
countTwo = 418

function nameChange() {
    changeElement.innerText = "Saro Mazzotta"
    // console.log("#name")
}

function toddFeature() {
    nameTracker.remove();
    acceptElement.remove();
    closeElement.remove();
    count--;
    requestTracker.innerText = count 
    countTwo++;
    connectionTracker.innerText = countTwo
}

function phillFeature() {
    toddNameTracker.remove();
    phillAcceptElement.remove();
    phillCloseElement.remove();
    count--;
    requestTracker.innerText = count
    countTwo++;
    connectionTracker.innerText = countTwo
}