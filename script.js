const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor;
let score = 0;

function startGame() {
    // Randomly select a target color
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").textContent = "";
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    // Shuffle color options
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

    // Create color buttons
    shuffledColors.forEach(color => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = color;
        btn.setAttribute("data-testid", "colorOption");
        btn.onclick = () => checkGuess(color);
        optionsDiv.appendChild(btn);
    });
}

function checkGuess(color) {
    const status = document.getElementById("gameStatus");

    if (color === targetColor) {
        score++;
        status.textContent = "🎉 Correct!";
        status.style.color = "green";
        document.getElementById("score").textContent = score;
    } else {
        status.textContent = "❌ Wrong! Try again.";
        status.style.color = "red";
    }

    // Add a fade-out effect for wrong answers
    status.style.opacity = "1";
    setTimeout(() => {
        status.style.opacity = "0.5";
    }, 500);
}

document.getElementById("newGameButton").onclick = startGame;

// Start the game initially
startGame();
