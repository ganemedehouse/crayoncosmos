const titleVariations = [
    "Beyond the Scribbles",
    "Decoding the Rainbow",
    "Whispers from the Crayon Box",
    "The Art of Innocence",
    "Inner Worlds Unveiled",
    "The Psychology of Play",
    "Where Colors Speak",
    "Art as a Mirror of the Soul",
    "Exploring the Creative Mind",
    "Unveiling the Genius Within",
];

function init() {
    var randomIndex = Math.floor(Math.random() * titleVariations.length);
    var titleElement = document.getElementById("title");
    var characters = titleVariations[randomIndex].split("");
    var currentCharIndex = 0;
    var cursorElement = document.getElementById("cursor");

    var intervalId = setInterval(function () {
        if (currentCharIndex >= characters.length) {
            clearInterval(intervalId);
            cursorElement.style.animation = "cursor-blink 1s  infinite";
        } else {
            var newCharacter = document.createTextNode(characters[currentCharIndex]);
            titleElement.insertBefore(newCharacter, cursorElement);
            currentCharIndex++;
        }
    }, 50);
}

init();
