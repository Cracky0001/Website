const textParts = [
    "† YourName †",
    "† emaNruoY †",
    "† Your Welcome †",
    "♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥"
    // You cann add more!
];

let currentPartIndex = 0;
let position = 0;
let interval;

function writeTextPart() {
    const currentPart = textParts[currentPartIndex];
    document.title = currentPart.substring(0, position);
    position++;

    if (position > currentPart.length) {
        currentPartIndex++;
        position = 0;
        if (currentPartIndex === textParts.length) {
            currentPartIndex = 0;
        }
    }
}

interval = setInterval(writeTextPart, 120);
