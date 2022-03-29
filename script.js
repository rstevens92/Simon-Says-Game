const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");

redButton.addEventListener("click", () => {
    console.log("clicked")
    redButton.style.backgroundColor = "darkred";
    const colourTimeout = setTimeout(resetColour, 50);
    function resetColour() {
        redButton.style.backgroundColor = "red";
        console.log("changed colour");
    }
});

blueButton.addEventListener("click", () => {
    console.log("clicked")
    blueButton.style.backgroundColor = "darkblue";
    const colourTimeout = setTimeout(resetColour, 50);
    function resetColour() {
        blueButton.style.backgroundColor = "blue";
        console.log("changed colour");
    }
});

yellowButton.addEventListener("click", () => {
    console.log("clicked")
    yellowButton.style.backgroundColor = "darkgoldenrod";
    const colourTimeout = setTimeout(resetColour, 50);
    function resetColour() {
        yellowButton.style.backgroundColor = "yellow";
        console.log("changed colour");
    }
});

greenButton.addEventListener("click", () => {
    console.log("clicked")
    greenButton.style.backgroundColor = "darkgreen";
    const colourTimeout = setTimeout(resetColour, 50);
    function resetColour() {
        greenButton.style.backgroundColor = "green";
        console.log("changed colour");
    }
});