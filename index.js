const fredDonutClicker = new donutClicker()

const totalDonuts = document.querySelector("playerScore");
const makeDonutsButton = document.querySelector("makeDonuts");
const totalAutoClickers = document.querySelector("autoClicksPurchased");
const buyAcButton = document.querySelector("storeButton");
const costOfAc = document.querySelector("autoClickerCost");

document.querySelector("#makeDonuts").onclick = donutButtonClicked() {
    if (totalDonuts >= 0) {
        totalDonuts ++;

    }
}
