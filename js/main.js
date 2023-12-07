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
    "Unveiling the Child Within",
    "A Kaleidoscope of Creativity",
    "A Glimpse into the Unfiltered Canvas",
    "Where Imagination Takes Flight",
    "The Artful Journey of Childhood",
    "The Language of Crayons",
    "Mindful Marks on Paper",
    "Sparkling with Creative Energy",
    "Beyond the Lines and Colors",
    "The Unbound Potential of Imagination",
];

function init() {
    typeTitle();
}

function typeTitle() {
    const randomIndex = Math.floor(Math.random() * titleVariations.length);
    const titleElement = document.getElementById("title");
    const cursorElement = document.getElementById("cursor");
    const characters = titleVariations[randomIndex].split("");
    let currentCharIndex = 0;

    function typeNextChar() {
        if (currentCharIndex >= characters.length) {
            cursorElement.style.animation = "cursor-blink 1s infinite";
            setTimeout(function () {
                cursorElement.style.animation = "none";
                deleteTitle();
            }, 5000); // 5 Seconds
        } else {
            const newCharacter = document.createTextNode(
                characters[currentCharIndex]
            );
            titleElement.insertBefore(newCharacter, cursorElement);
            currentCharIndex++;
            setTimeout(typeNextChar, Math.floor(30 + Math.random() * 120)); // 30-150 milliseconds
        }
    }

    typeNextChar();
}

function deleteTitle() {
    const titleElement = document.getElementById("title");
    const characters = Array.from(titleElement.childNodes);
    let currentCharIndex = characters.length - 1;

    const intervalId = setInterval(function () {
        if (currentCharIndex < 0) {
            clearInterval(intervalId);
            typeTitle();
        } else {
            if (characters[currentCharIndex].nodeType === Node.TEXT_NODE) {
                // Only delete if it's a text node
                titleElement.removeChild(characters[currentCharIndex]);
            }
            currentCharIndex--;
        }
    }, 30);
}

init();
