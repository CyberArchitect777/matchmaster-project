
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
    }
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

preloadImages();
drawGameBoard();
generateRandomCardOrder();
