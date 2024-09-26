const codes = ['IKVF5TSH', '7G07Q9S4', '7IOZ7OT5', 'RZBQJ3J7', 'O89RAQI9', /* Add 26 more from the image */];
const calendar = document.getElementById('calendar');

// Create the calendar boxes
for (let i = 1; i <= 31; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = i;
    box.addEventListener('click', () => revealCode(i, box));
    calendar.appendChild(box);
}

// Function to reveal a code
function revealCode(day, box) {
    const today = new Date().getDate();
    
    // Ensure the day matches and hasn't been clicked before
    if (day <= today && !localStorage.getItem(`day${day}`)) {
        const code = codes[day - 1]; // Pick the code for the day
        box.textContent = code;
        localStorage.setItem(`day${day}`, code); // Store the opened day
        box.classList.add('disabled');
    } else {
        alert('You can only open this box today or it has already been opened!');
    }
}

// Load previously opened boxes
for (let i = 1; i <= 31; i++) {
    if (localStorage.getItem(`day${i}`)) {
        const box = document.querySelector(`.box:nth-child(${i})`);
        box.textContent = localStorage.getItem(`day${i}`);
        box.classList.add('disabled');
    }
}
