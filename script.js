const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const actionButton = document.getElementById("center-button");

let flashNumber = 0;
let flashNumberArr = [];
let pressedNumber = 0;
let pressedNumberArr = [];

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

greenButton.addEventListener("click", () => {
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
    actionButton.innerHTML = "Try Again";
    pressedNumberArr = [];
    // buttonFlashing();
     for (; flashNumberArr.length > 4; flashNumberArr++){
         setInterval(buttonFlashing, 1000);
     }
});

