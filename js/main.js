// Initialize the app when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => init());

// Initialize the app when the DOM content is loaded
function init() {
    typeTitle();
}

// Type the title in a realistic style
const titleVariations = [
    "Beyond the Scribbles 🌈",
    "Decoding the Rainbow 🎨",
    "Whispers from the Crayon Box 🖍️",
    "The Art of Innocence 🎈",
    "Inner Worlds Unveiled 🌌",
    "The Psychology of Play 🤹",
    "Where Colors Speak 🎤",
    "Art as a Mirror of the Soul 🎭",
    "Exploring the Creative Mind 🧠",
    "Unveiling the Genius Within 🌟",
    "Unveiling the Child Within 👶",
    "A Kaleidoscope of Creativity 🔮",
    "A Glimpse into the Unfiltered Canvas 🖼️",
    "Where Imagination Takes Flight ✈️",
    "The Artful Journey of Childhood 🚀",
    "The Language of Crayons 🖍️",
    "Mindful Marks on Paper 📝",
    "Sparkling with Creative Energy ✨",
    "Beyond the Lines and Colors 🌈",
    "The Unbound Potential of Imagination 🚀",
    "Little Hands, Big Dreams 👐",
    "The Colors of Childhood 🌈",
    "A World Imagined 🌍",
    "Where Imagination Blossoms 🌸",
    "Echoes of Innocence 🍼",
    "A Symphony of Crayons 🎶",
    "Fingerprints on the Future 👣",
];

function typeTitle() {
    const randomIndex = Math.floor(Math.random() * titleVariations.length);
    const titleElement = document.getElementById("title");
    const cursorElement = document.getElementById("cursor");
    const characters = titleVariations[randomIndex].split("");
    let currentCharIndex = 0;

    function typeNextChar() {
        if (currentCharIndex >= characters.length) {
            cursorElement.style.animation = "cursor-blink 1s infinite";
            setTimeout(() => {
                cursorElement.style.animation = "none";
                deleteTitle();
            }, 5000); // 5 seconds
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

// Delete the title
function deleteTitle() {
    const titleElement = document.getElementById("title");
    const characters = Array.from(titleElement.childNodes);
    let currentCharIndex = characters.length - 1;

    const intervalId = setInterval(() => {
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

// Setup study tabs functionality
const studiesTabs = document.querySelectorAll(".study-tab");
const studies = document.querySelectorAll(".study");

studiesTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const studyId = tab.id.replace("-button", "");
        studies.forEach((study) => {
            study.style.display = "none";
        });
        studiesTabs.forEach((tab) => {
            tab.classList.remove("pressed");
        });
        document.getElementById(studyId).style.display = "block";
        tab.classList.add("pressed");
    });
});

// Scale photobanner images with mouse hovering
document.querySelectorAll(".photobanner img").forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.objectFit = "fill";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "";
        img.style.objectFit = "cover";
    });
});

// Fade in sections when get inside viewport
const fadeInElements = document.querySelectorAll(".fade-in");

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(callback);

fadeInElements.forEach((element) => observer.observe(element));
