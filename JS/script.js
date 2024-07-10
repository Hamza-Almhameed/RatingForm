let rateForm = document.getElementById("rate");
let rateOne = document.getElementById("one");
let rateTwo = document.getElementById("two");
let rateThree = document.getElementById("three");
let rateFour = document.getElementById("four");
let rateFive = document.getElementById("five");
let submit = document.getElementById("submit");
let doneForm = document.getElementById("done")
let finalText = document.getElementById("selection");
let rateNum = 0;


rateOne.onclick = function () {
    rateNum = 1;
    rateOne.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateTwo.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateThree.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFour.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFive.style.backgroundColor = "hsl(216, 10%, 30%)";
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
}

rateTwo.onclick = function () {
    rateNum = 2;
    rateOne.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateTwo.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateThree.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFour.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFive.style.backgroundColor = "hsl(216, 10%, 30%)";
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
}

rateThree.onclick = function () {
    rateNum = 3;
    rateOne.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateTwo.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateThree.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFour.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFive.style.backgroundColor = "hsl(216, 10%, 30%)";
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
}

rateFour.onclick = function () {
    rateNum = 4;
    rateOne.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateTwo.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateThree.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFour.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFive.style.backgroundColor = "hsl(216, 10%, 30%)";
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
}

rateFive.onclick = function () {
    rateNum = 5;
    rateOne.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateTwo.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateThree.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFour.style.backgroundColor = "hsl(216, 10%, 30%)";
    rateFive.style.backgroundColor = "hsl(216, 10%, 30%)";
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
}



submit.onclick = function () {
    if (rateNum != 0) {
        rateForm.style.display = "none";
        doneForm.style.display = "block";
        finalText.innerText = `Submit You selected ${rateNum} out of 5`;
    } else {
        alert("You have to choose your rate");
    }
}