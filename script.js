const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const actionButton = document.getElementById("center-button");

let flashNumber = 0;

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
});

blueButton.addEventListener("click", () => {
        blueButtonFlash();
});

yellowButton.addEventListener("click", () => {
        yellowButtonFlash();
});

greenButton.addEventListener("click", () => {
        greenButtonFlash();
});

function buttonFlashing() {
    flashNumber = Math.floor(Math.random()*4);
    console.log(flashNumber);
    if(flashNumber === 0){
        redButtonFlash();
    } else if (flashNumber === 1) {
        blueButtonFlash();
    } else if (flashNumber === 2) {
        yellowButtonFlash();
    } else {
        greenButtonFlash();
    }; 
}

actionButton.addEventListener("click", () => {
    actionButton.innerHTML = "Try Again";
    for (let i = 0; i < 3 ; i++){
        setInterval(buttonFlashing, 2000);
    }
});

