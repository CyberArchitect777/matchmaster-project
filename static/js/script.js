
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
        gameBoard.appendChild(gameBox);
    }
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

const totalBoxNumber = 18;
const gameBoard = document.getElementById("gameboard");
window.addEventListener("resize", resizeCards);
const faceDownImage = "https://res.cloudinary.com/dp1ehadna/image/upload/v1722961152/card-back_qvymqm.png"
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

drawGameBoard();
