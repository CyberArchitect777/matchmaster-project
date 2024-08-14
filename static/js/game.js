
function drawGameBoard() {
    /**
     * 
     * A function to draw the game board and place all box elements into it
     * in a responsive manner.
     * 
     */

    for (let x=0;x<memoryGameData.totalBoxNumber;x++) {
        let gameBox = document.createElement("img");
        gameBox.classList.add("gamebox")
        gameBox.src = memoryGameData.faceDownImage[0];
        gameBox.alt = memoryGameData.faceDownImage[1];
        gameBox.style.width = calculateCardSize();
        gameBox.style.height = gameBox.style.width;
        gameBox.id = "box" + x;
        gameBox.tabIndex = x; // Assign a tab index for keyboard control
        gameBox.addEventListener("click", handleClick);
        gameBoard.appendChild(gameBox);
    }
}

function loadCardUpSrc(imageNumber) {
    /**
     * 
     * Returns the image source URL of a card face up when given an imageNumber to retrieve
     * 
     * @param {number} imageNumber
     * @return (string)
     * 
     */

    return memoryGameData.faceUpImages[imageNumber][0];
}

function loadCardUpAlt(imageNumber) {
    /**
     * 
     * Returns the image alt value of a card face up when given an imageNumber to retrieve
     * 
     * @param {number} imageNumber
     * @return (string)
     * 
     */

    return memoryGameData.faceUpImages[imageNumber][1];
}

function generateRandomCardOrder() {
    /**
     * 
     * A function to calculate the order of the boxes and place the order
     * in an array. 
     * 
     */
    for (let x=0;x<memoryGameData.totalBoxNumber;x++) {
        let numberNotChosen = true;
        while (numberNotChosen) {
            let randomNumber = Math.floor(Math.random() * (memoryGameData.totalBoxNumber / 2));
            // If the number hasn't been placed twice already...
            if (countPlacement(randomNumber) < 2) {
                memoryGameData.numberPlacement.push(randomNumber);
                numberNotChosen = false;
            }
        }
    }
}

function countPlacement(numberChosen) {
    /**
     * 
     * A function to count the number of items a number has been placed
     * in the numberPlacement array already.
     * 
     * @param {number} numberChosen - The number to check
     * @return {number} numberCount - The number of times it appears in numberPlacement
     */

    let numberCount = 0;
    memoryGameData.numberPlacement.forEach(element => element == numberChosen ? numberCount++ : numberCount);
    return numberCount;
}

function calculateCardSize() {
    /**
     * 
     * Calculate the size of the boxes based on the width of the browser window
     * 
     * @return {string} A size in pixels for CSS.
     * 
     */

    if (document.documentElement.clientWidth < 479) {
        return "60px";
    } else if ((document.documentElement.clientWidth > 478) && (document.documentElement.clientWidth < 771)) {
        return "80px";
    } else if ((document.documentElement.clientWidth > 770) && (document.documentElement.clientWidth < 991)) {
        return "100px";
    } else if ((document.documentElement.clientWidth > 990) && (document.documentElement.clientWidth < 1400)) {
        return "120px";
    } else {
        return "140px";
    }
}

function resizeCards() {
    /**
     * 
     * Resizes the cards based on a detected browser window size change.
     * 
     */

    for (let x=0;x<memoryGameData.totalBoxNumber;x++) {
        const currentBox = document.getElementById("box" + x);
        currentBox.style.width = calculateCardSize();
        // Keeps the aspect ratio square
        currentBox.style.height = currentBox.style.width;
    }
}

function handleClick(event) {
    /**
     * 
     * Handes a click event and passes the event onto handleInput
     * 
     * @param {Event} An instance of Event
     * 
     */

    handleInput(event.target.id);
}

function handleInput(cardId) {
    /**
     * 
     * A function to handle input from both keyboard and mouse, both
     * call this with an event parameter
     * 
     * @param {Event} An instance of Event
     * 
     */

    let selectedBox = document.getElementById(cardId);
    if (selectedBox.src == memoryGameData.faceDownImage[0]) {
        memoryGameData.picked.push(cardId); // Add the box to an array of cards currently selected.
        if (memoryGameData.picked.length == 1) { // If this is the first card turned over
            // The slice(3) operations is to remove "box" from the front of the id.
            selectedBox.src = loadCardUpSrc(memoryGameData.numberPlacement[memoryGameData.picked[0].slice(3)]);
            selectedBox.alt = loadCardUpAlt(memoryGameData.numberPlacement[memoryGameData.picked[0].slice(3)]);
        }
        else {
            if (memoryGameData.picked.length == 2) { // If this is the second card turned over.
                selectedBox.src = loadCardUpSrc(memoryGameData.numberPlacement[(cardId).slice(3)]);
                selectedBox.alt = loadCardUpAlt(memoryGameData.numberPlacement[(cardId).slice(3)]);
                if (memoryGameData.numberPlacement[memoryGameData.picked[0].slice(3)] == memoryGameData.numberPlacement[(cardId).slice(3)]) {
                    // If a correct match has been made
                    memoryGameData.picked.length = 0;
                    memoryGameData.matchesLeft--;
                }
                else {
                    // After a second, flip the cards over again
                    setTimeout(function() {
                        selectedBox.src = memoryGameData.faceDownImage[0];
                        selectedBox.alt = memoryGameData.faceDownImage[1];
                        document.getElementById(memoryGameData.picked[0]).src = memoryGameData.faceDownImage[0];
                        document.getElementById(memoryGameData.picked[0]).alt = memoryGameData.faceDownImage[1];
                        memoryGameData.picked.length = 0;
                    }, 1000);
                }
            }
            memoryGameData.rounds++;
        }
        updateScore();
        if (memoryGameData.matchesLeft == 0) {
            // If all matches have been made, end the game.
            endGame();
        }
    }
}

function endGameButtonPressed() {
    /**
     * 
     * Function to handle the ending process after the "End
     * Game button is activated.
     * 
     */

    // Create hidden form with data to prepare to send data to Django

    const hiddenForm = document.createElement("form");
    hiddenForm.method = "POST";
    hiddenForm.action = "/playerprofile/";
    const gameTypeSetting = document.createElement("input");
    gameTypeSetting.type = "hidden";
    gameTypeSetting.name = "game-type-setting";
    // This is the default 18 box game currently implemented.
    gameTypeSetting.value = 1; 
    hiddenForm.appendChild(gameTypeSetting);
    const formId = document.createElement("input");
    formId.type = "hidden"
    formId.name = "form_id";
    formId.value = "game_complete"; // Resorted to Django names for style merger
    hiddenForm.appendChild(formId);
    const roundsTaken = document.createElement("input");
    roundsTaken.type = "hidden";
    roundsTaken.name = "rounds-taken";
    roundsTaken.value = memoryGameData.rounds;
    hiddenForm.appendChild(roundsTaken);

    // Add csrftoken security for Django

    const csrfToken = document.createElement("input");
    csrfToken.type = "hidden";
    csrfToken.name = "csrfmiddlewaretoken";
    let csrfTokenValue = "";
    const cookieCollection = document.cookie.split(";");
    for (let x=0; x < cookieCollection.length; x++) {
        const currentCookie = cookieCollection[x].trim();
        if (currentCookie.startsWith("csrftoken=") == true) {
            csrfTokenValue = decodeURIComponent(currentCookie.substring(10));
            break;
        }
    }
    csrfToken.value = csrfTokenValue;
    hiddenForm.appendChild(csrfToken);
    document.body.appendChild(hiddenForm);

    // Submit hidden form with results to Django

    hiddenForm.submit();
}

function endGame() {
    /**
     * 
     * Hides the game screen and shows the score card at the end.
     * 
     */

    // Update scoreboard on end game screen

    document.getElementById("round-number").innerText = memoryGameData.rounds;

    // Hide the game screen and show the final score one

    document.getElementById("gamepanel-id").classList.add("hide");
    document.getElementById("gamepanel-id").setAttribute("aria-hidden", "true")
    document.getElementById("scorepanel-id").classList.remove("hide");
    document.getElementById("scorepanel-id").setAttribute("aria-hidden", "false")
}

function preloadImages() {
    /**
     * 
     * Pre-loads the game graphical images to make the gameplay more responsive.
     * 
     */
    for (let x=0;x<memoryGameData.faceUpImages.length;x++) {
        const imagePreloaded = new Image();
        imagePreloaded.src = memoryGameData.faceUpImages[x][0];
    }
}

function handleKeyPlay(event) {
    /***
     * 
     * Handle keyboard input for keyboard play. The "left" and "right" arrow
     * keys control left and right selection with "space" or "enter" to 
     * select a card.
     * 
     * @param {Event} A keyboard listener event.
     * 
     */
    if (memoryGameData.keyboardPosition == -1) {
        // If a keypress is detected for the first time, select the first box
        memoryGameData.keyboardPosition = 0;
    } else { // Make decisions based on what key is pressed
        switch(event.key) {
            case "Enter":
                handleInput("box" + memoryGameData.keyboardPosition)
                break;
            case " ":
                handleInput("box" + memoryGameData.keyboardPosition)
                break;
            case "ArrowLeft":
                if (memoryGameData.keyboardPosition > 0) {
                    memoryGameData.keyboardPosition--;
                }
                break;
            case "ArrowRight":
                if (memoryGameData.keyboardPosition < memoryGameData.totalBoxNumber) {
                    memoryGameData.keyboardPosition++;
                }
                break;
        }
    }
    // Targets focus on whichever box has been selected by the user
    (document.getElementById("box" + memoryGameData.keyboardPosition)).focus();
}

function updateScore() {
    /**
     * 
     * Updates the live HTML scoreboard as the game goes on
     * 
     */
    const roundInfo = document.getElementById("rounds");
    const matchInfo = document.getElementById("matches");
    roundInfo.innerText = "Rounds played: " + memoryGameData.rounds;
    matchInfo.innerText = "Pair matches left: " + memoryGameData.matchesLeft;
}

function restartGame() {
    /**
     * 
     * Restarts the current game at the request of the user with the "Restart Game"
     * button. Resets everything for a fresh start again.
     * 
     */
    // Disables the restart-button for a second
    (document.getElementById("restart-game-button")).disabled = true;
    (document.getElementById("restart-game-button")).style.backgroundColor = "grey";
    setTimeout(function() {
        // Delays the process by a second to allow the other possible concurrency 
        // process, the dual card displaying process is complete. Not doing so can
        // break the game.  
        gameBoard.innerHTML = "";
        memoryGameData.numberPlacement = [];
        memoryGameData.picked = [];
        memoryGameData.keyboardPosition = -1;
        memoryGameData.rounds = 0;
        memoryGameData.matchesLeft = 9;
        preloadImages();
        drawGameBoard();
        generateRandomCardOrder();
        updateScore();
        // Re-enables the restart button.
        (document.getElementById("restart-game-button")).disabled = false;
        (document.getElementById("restart-game-button")).style.backgroundColor = "red";
    }, 1000);
}

// A global object storing all necessary data to use in other functions.
// The object was used to avoid the possibility of variable clashes 
// (in theory only here) with other global variables.
const memoryGameData = {
    totalBoxNumber: 18,
    numberPlacement: [],
    picked: [],
    keyboardPosition: -1,
    rounds: 0,
    matchesLeft: 9,
    // image cards sources and alt tags for the game
    faceDownImage: [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492042/card-back-transparent_xz6zze.png", "Card back image" ],
    faceUpImages: [
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492052/tennis_nxig8i.png", "Tennis card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492048/netball_jdwkkf.png", "Netball card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492050/shuttlecock_kkhr6t.png", "Shuttlecock card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492046/cycling_glssmu.png", "Cycling card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492051/tabletennis_g70rrq.png", "Table tennis card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492049/rugby_tfkw7m.png", "Rugby ball card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492047/football_dul9j8.png", "Football card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492044/cricket_ilsb6w.png", "Cricket card image" ],
    [ "https://res.cloudinary.com/dp1ehadna/image/upload/v1723492042/basketball_z04lcy.png", "Basketball card image" ],
    ] 
};

// The main gameboard
const gameBoard = document.getElementById("gameboard");
// Event listeners for window size changes as well as keyboard/mouse clicks and presses
window.addEventListener("resize", resizeCards);
window.addEventListener("keydown", handleKeyPlay);
(document.getElementById("end-game-button")).addEventListener("click", endGameButtonPressed);
(document.getElementById("restart-game-button")).addEventListener("click", restartGame);

// Main game starting logic
preloadImages();
drawGameBoard();
generateRandomCardOrder();
