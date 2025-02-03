// Define possible colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

// Select elements
const colorBox = document.getElementById("colorBox");
const optionsContainer = document.getElementById("options");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

// Function to start a new game
function startNewGame() {
    // Pick a random color
    targetColor = colors[Math.floor(Math.random() * colors.length)];

    // Set color box background
    colorBox.style.backgroundColor = targetColor;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Shuffle colors for randomness
    let shuffledColors = [...colors].sort(() => 0.5 - Math.random());

    // Generate color options as buttons
    shuffledColors.forEach(color => {
        const button = document.createElement("button");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.addEventListener("click", () => checkGuess(color));
        optionsContainer.appendChild(button);
    });

    // Reset game status message
    gameStatus.textContent = "Pick a color!";
    gameStatus.style.color = "#333";
}

// Function to check the user's guess
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.style.color = "green";
        score++;
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
    }

    // Update score
    scoreDisplay.textContent = `Score: ${score}`;
}

// Event listener for new game button
newGameButton.addEventListener("click", startNewGame);

// Start the game initially
startNewGame();
