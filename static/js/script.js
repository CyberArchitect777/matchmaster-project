
function drawGameBoard() {
    for (let x=0;x<totalBoxNumber;x++) {
        let gameBox = document.createElement("div");
        gameBox.style.background = "black url('" + faceDownImage + "') no-repeat center center / cover";
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
    for (let x=0;x<totalBoxNumber;x++) {
        let numberNotChosen = true;
        while (numberNotChosen) {
            let randomNumber = Math.floor(Math.random() * (totalBoxNumber / 2));
            if (countPlacement(randomNumber) < 2) {
                numberPlacement.push(randomNumber);
                numberNotChosen = false;
            }
        }
    }
}

function countPlacement(numberChosen) {
    let numberCount = 0;
    numberPlacement.forEach(element => element == numberChosen ? numberCount++ : numberCount);
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
    for (let x=0;x<totalBoxNumber;x++) {
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
    if (selectedBox.style.backgroundImage == 'url("' + faceDownImage + '")') {
        picked.push(cardId);
        if (picked.length == 1) {
            selectedBox.style.backgroundImage = 'url("' + faceUpImages[numberPlacement[picked[0].slice(3)]];
        }
        else {
            if (picked.length == 2) {
                selectedBox.style.backgroundImage = 'url("' + faceUpImages[numberPlacement[(cardId).slice(3)]];
                if (numberPlacement[picked[0].slice(3)] == numberPlacement[(cardId).slice(3)]) {
                    picked.length = 0;
                }
                else {
                    setTimeout(function() {
                        selectedBox.style.background = 'black url("' + faceDownImage + '") no-repeat center center / cover';
                        document.getElementById(picked[0]).style.background = 'black url("' + faceDownImage + '") no-repeat center center / cover';
                        picked.length = 0;
                    }, 1000);
                }
            }
        }
    }
}

function preloadImages() {
    for (let x=0;x<faceUpImages.length;x++) {
        const imagePreloaded = new Image();
        imagePreloaded.src = faceUpImages[x];
    }
}

function handleKeyPlay(event) {
    if (keyboardPosition == -1) {
        keyboardPosition = 0;
    } else {
        switch(event.key) {
            case "Enter":
                handleInput("box" + keyboardPosition)
                break;
            case "Space":
                handleInput("box" + keyboardPosition)
                break;
            case "ArrowLeft":
                if (keyboardPosition > 0) {
                    keyboardPosition--;
                }
                break;
            case "ArrowRight":
                if (keyboardPosition < totalBoxNumber) {
                    keyboardPosition++;
                }
                break;
        }
    }
    (document.getElementById("box" + keyboardPosition)).focus();
}

const totalBoxNumber = 18;
let numberPlacement = [];
let picked = [];
let keyboardPosition = -1;
const gameBoard = document.getElementById("gameboard");
window.addEventListener("resize", resizeCards);
window.addEventListener("keydown", handleKeyPlay);
const faceDownImage = "https://res.cloudinary.com/dp1ehadna/image/upload/v1723025181/card-back-transparent_dygt3k.png"
const faceUpImages = [ 
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

preloadImages();
drawGameBoard();
generateRandomCardOrder();
