console.log("Connected...")

function giveAlert() {
    alert("Ninja was liked")
}

function changeText(element) {
    if (element.innerText == "Logout") {
        element.innerText = "Login";
    } else {
        element.innerText = "Logout"
    }
    // console.log(element.innerText);
}

// function changeTextLogin(element) {
//     console.log(element.innterText);
//     element.innerText = "Login"
// }

function removeDefinition(element) {
    console.log(element.innerText);
    element.remove();
}