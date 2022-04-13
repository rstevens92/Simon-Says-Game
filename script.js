const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const actionButton = document.getElementById("center-button");
const enterButton = document.getElementById("enter-button");
const resetButton = document.getElementById("reset-button");

let flashNumber = 0;
let flashNumberArr = [];
let pressedNumber = 0;
let pressedNumberArr = [];
let winCounter = 0;

function redButtonFlash() {
    redButton.style.backgroundColor = "maroon";
    const colourTimeout = setTimeout(resetColour, 100);
    function resetColour() {
        redButton.style.backgroundColor = "red";
    }
}

function blueButtonFlash() {
    blueButton.style.backgroundColor = "#000066";
    const colourTimeout = setTimeout(resetColour, 100);
    function resetColour() {
        blueButton.style.backgroundColor = "blue";
    }
}

function yellowButtonFlash() {
    yellowButton.style.backgroundColor = "darkgoldenrod";
    const colourTimeout = setTimeout(resetColour, 100);
    function resetColour() {
        yellowButton.style.backgroundColor = "yellow";
    }
}

function greenButtonFlash() {
    greenButton.style.backgroundColor = "#003300";
    const colourTimeout = setTimeout(resetColour, 100);
    function resetColour() {
        greenButton.style.backgroundColor = "green";
    }
}


redButton.addEventListener("click", () => {
        redButtonFlash();
        pressedNumber = 0;
        pressedNumberArr.push(pressedNumber);
        console.log(pressedNumber);
});

blueButton.addEventListener("click", () => {
        blueButtonFlash();
        pressedNumber = 1;
        pressedNumberArr.push(pressedNumber);
        console.log(pressedNumber);
});

yellowButton.addEventListener("click", () => {
        yellowButtonFlash();
        pressedNumber = 2;
        pressedNumberArr.push(pressedNumber);
        console.log(pressedNumber);
});

greenButton.addEventListener("click", (id) => {
        greenButtonFlash();
        pressedNumber = 3;
        pressedNumberArr.push(pressedNumber);
        console.log(pressedNumber);
});

function buttonFlashing() {
    flashNumber = Math.floor(Math.random()*4);
    console.log(flashNumber);
    if(flashNumber === 0){
        redButtonFlash();
        flashNumberArr.push(flashNumber);
    } else if (flashNumber === 1) {
        blueButtonFlash();
        flashNumberArr.push(flashNumber);
    } else if (flashNumber === 2) {
        yellowButtonFlash();
        flashNumberArr.push(flashNumber);
    } else {
        greenButtonFlash();
        flashNumberArr.push(flashNumber);
    }; 
}
    actionButton.addEventListener("click", () => {
        actionButton.innerText = "Start";
        pressedNumberArr = [];
        flashNumberArr = [];
      if (winCounter === 0){
        for (let i = 1; i < 4; i++){
       setTimeout( buttonFlashing, 1000*i);
       i+1;
    }}
    if (winCounter === 1){
        for (let i = 1; i < 5; i++){
       setTimeout( buttonFlashing, 1000*i);
       i+1;
    }}
    if (winCounter === 2){
        for (let i = 1; i < 6; i++){
       setTimeout( buttonFlashing, 1000*i);
       i+1;
    }}
    if (winCounter === 3){
        for (let i = 1; i < 7; i++){
       setTimeout( buttonFlashing, 1000*i);
       i+1;
    }}
    if (winCounter === 4){
        location.reload();
    }
});

    enterButton.addEventListener("click", () => {
        let playerAnswer = pressedNumberArr.join();
        let gameAnswer = flashNumberArr.join();
        if (playerAnswer == gameAnswer){
            actionButton.innerText = "Next Level";
            console.log("winner!");
            winCounter += 1;
        } else {
            actionButton.innerText = "Try Again";
            console.log("Try again!");
        }
    });

    resetButton.addEventListener("click", () =>{
        location.reload();
    })