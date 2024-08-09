
function drawGameBoard() {
    for (let x=0;x<memoryGameData.totalBoxNumber;x++) {
        let gameBox = document.createElement("div");
        gameBox.style.background = "black url('" + memoryGameData.faceDownImage + "') no-repeat center center / cover";
        gameBox.style.width = calculateCardSize();
        gameBox.style.height = gameBox.style.width;
        gameBox.style.margin = "5px";
        gameBox.id = "box" + x;
        gameBox.style.display = "flex";
        gameBox.style.justifyContent = "center";
        gameBox.style.alignItems = "center";
        gameBox.tabIndex = x;
        gameBox.addEventListener("click", handleClick);
        gameBoard.appendChild(gameBox);
    }
}

function generateRandomCardOrder() {
    for (let x=0;x<memoryGameData.totalBoxNumber;x++) {
        let numberNotChosen = true;
        while (numberNotChosen) {
            let randomNumber = Math.floor(Math.random() * (memoryGameData.totalBoxNumber / 2));
            if (countPlacement(randomNumber) < 2) {
                memoryGameData.numberPlacement.push(randomNumber);
                numberNotChosen = false;
            }
        }
    }
}

function countPlacement(numberChosen) {
    let numberCount = 0;
    memoryGameData.numberPlacement.forEach(element => element == numberChosen ? numberCount++ : numberCount);
    return numberCount;
}

function calculateCardSize() {
    if (document.documentElement.clientWidth < 381) {
        return "60px";
    } else if ((document.documentElement.clientWidth > 380) && (document.documentElement.clientWidth < 771)) {
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
    for (let x=0;x<memoryGameData.totalBoxNumber;x++) {
        const currentBox = document.getElementById("box" + x);
        currentBox.style.width = calculateCardSize();
        currentBox.style.height = currentBox.style.width;
    }
}

function handleClick(event) {
    handleInput(event.target.id);
}

function handleInput(cardId) {
    let selectedBox = document.getElementById(cardId);
    if (selectedBox.style.backgroundImage == 'url("' + memoryGameData.faceDownImage + '")') {
        memoryGameData.picked.push(cardId);
        if (memoryGameData.picked.length == 1) {
            selectedBox.style.backgroundImage = 'url("' + memoryGameData.faceUpImages[memoryGameData.numberPlacement[memoryGameData.picked[0].slice(3)]];
        }
        else {
            if (memoryGameData.picked.length == 2) {
                selectedBox.style.backgroundImage = 'url("' + memoryGameData.faceUpImages[memoryGameData.numberPlacement[(cardId).slice(3)]];
                if (memoryGameData.numberPlacement[memoryGameData.picked[0].slice(3)] == memoryGameData.numberPlacement[(cardId).slice(3)]) {
                    memoryGameData.picked.length = 0;
                    memoryGameData.matchesLeft--;
                }
                else {
                    setTimeout(function() {
                        selectedBox.style.background = 'black url("' + memoryGameData.faceDownImage + '") no-repeat center center / cover';
                        document.getElementById(memoryGameData.picked[0]).style.background = 'black url("' + memoryGameData.faceDownImage + '") no-repeat center center / cover';
                        memoryGameData.picked.length = 0;
                    }, 1000);
                }
            }
            memoryGameData.rounds++;
        }
        updateScore();
        if (memoryGameData.matchesLeft == 0) {
            endGame();
        }
    }
}

function endGameButtonPressed() {

    // Create hidden form with data to prepare to send data to Django

    const hiddenForm = document.createElement("form");
    hiddenForm.method = "POST";
    hiddenForm.action = "/playerprofile/";
    const gameTypeSetting = document.createElement("input");
    gameTypeSetting.type = "hidden";
    gameTypeSetting.name = "game-type-setting";
    gameTypeSetting.value = 1; // This is the default 18 box game currently implemented.
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

    // Update scoreboard on end game screen

    document.getElementById("round-number").innerText = memoryGameData.rounds;

    // Hide the game screen and show the final score one

    document.getElementById("gamepanel-id").classList.add("hide");
    document.getElementById("gamepanel-id").setAttribute("aria-hidden", "true")
    document.getElementById("scorepanel-id").classList.remove("hide");
    document.getElementById("scorepanel-id").setAttribute("aria-hidden", "false")
}

function preloadImages() {
    for (let x=0;x<memoryGameData.faceUpImages.length;x++) {
        const imagePreloaded = new Image();
        imagePreloaded.src = memoryGameData.faceUpImages[x];
    }
}

function handleKeyPlay(event) {
    if (memoryGameData.keyboardPosition == -1) {
        memoryGameData.keyboardPosition = 0;
    } else {
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
    (document.getElementById("box" + memoryGameData.keyboardPosition)).focus();
}

function updateScore() {
    const roundInfo = document.getElementById("rounds");
    const matchInfo = document.getElementById("matches");
    roundInfo.innerText = "Rounds played: " + memoryGameData.rounds;
    matchInfo.innerText = "Pair matches left: " + memoryGameData.matchesLeft;
}

function restartGame() {
    (document.getElementById("restart-game-button")).disabled = true;
    (document.getElementById("restart-game-button")).style.backgroundColor = "grey";
    setTimeout(function() {
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
        (document.getElementById("restart-game-button")).disabled = false;
        (document.getElementById("restart-game-button")).style.backgroundColor = "red";
    }, 1000);
}

const memoryGameData = {
    totalBoxNumber: 18,
    numberPlacement: [],
    picked: [],
    keyboardPosition: -1,
    rounds: 0,
    matchesLeft: 9,
    faceDownImage: "https://res.cloudinary.com/dp1ehadna/image/upload/v1723025181/card-back-transparent_dygt3k.png",
    faceUpImages: [ 
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961152/tennis_qo0gjn.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961152/netball_eopq4b.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961152/shuttlecock_rpj6ts.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961151/cycling_ipb6hh.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961152/tabletennis_qhgci7.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961152/rugby_xvicsr.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961151/football_ioy3yg.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961151/cricket_jbv3hq.png",
    "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961151/basketball_fiftms.png",
    ]
};

const gameBoard = document.getElementById("gameboard");
window.addEventListener("resize", resizeCards);
window.addEventListener("keydown", handleKeyPlay);
(document.getElementById("end-game-button")).addEventListener("click", endGameButtonPressed);
(document.getElementById("restart-game-button")).addEventListener("click", restartGame);

preloadImages();
drawGameBoard();
generateRandomCardOrder();