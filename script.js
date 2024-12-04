const button = document.getElementById('colorButton');
const clickCounter = document.getElementById('clickCounter');

let clickCount = 0;

button.addEventListener('click', () => {
    const colors = [
    "#FADADD",
    "#FFD1DC",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
    "#D5AAFF",
    "#FFC8A2",
    "#F9F7CF",
    "#FCE8B2",
    "#FFDFD3",
    "#D4A5A5",
    "#C8C3F6",
    "#B4F8C8",
    "#FFECB6",
    "#F6EAC2",
    "#E4F9F5",
    "#FDE2E4",
    "#FFF1F0",
    "#FFC9DE",
    "#D2E0F4",
    "#DFF7F5",
    "#FFE4E1",
    "#FFFDD0",
    "#F8E8DC",
    "#C8E1E7",
    "#E8DFF5",
    "#F4D1AE",
    "#F2BAC9",
    "#C8B6FF",
    "#FFD6E0",
    "#F6D8AE",
    "#FFF4E6",
    "#E0F2E9",
    "#EAD4CD",
    "#D7D3EC",
    "#E2CCE1",
    "#C5D5CB",
    "#F8E4D5"
];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    clickCount++;
    clickCounter.textContent = `You have clicked the button ${clickCount} times.`;

    if (clickCounter != 0) {
        clickCounter.classList.remove("invisible"); 
    } else {
        clickCounter.classList.add("invisible"); 
    }
});