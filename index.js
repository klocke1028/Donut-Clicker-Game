
const totalDonuts = document.querySelector("#player-score");
const makeDonutsButton = document.querySelector("#make-donuts");
const totalAutoClickers = document.querySelector("#auto-clicks-purchased");
const buyAcButton = document.querySelector("#store-button");
const costOfAc = document.querySelector("#auto-clicker-cost");

const fredDonutClicker = new donutClicker()

const updateTotalDonuts = (totalDonuts, donutClicker) => {
    totalDonuts.innerText = donutClicker.getNumOfDonuts();
}

const updateAutoClickerNum = (totalAutoClickers, donutClicker) => {
    totalAutoClickers.innerText = donutClicker.getAutoClickerNum();
}

const updateAutoClickerCost = (costOfAc, donutClicker) => {
   
}


const makeDonutButtonWork = (makeDonutsButton, totalDonuts, donutClicker) => {
    makeDonutsButton.addEventListener("click", () => {
        donutClicker.makeADonut()
        updateTotalDonuts(totalDonuts, donutClicker);

    })
}

buyAutoClicker.addEventListener("click", function() {
   setInterval(function () {
    const playerScore = document.querySelector("#player-score");
    playerScore.innerText = counter;

    counter++;
    gameDisplay();
   })
}, 1000);

resetGame.addEventListener("click", function() {
    donutClicker.resetGame();
    gameDisplay();

})


