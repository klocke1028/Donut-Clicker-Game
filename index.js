
const totalDonuts = document.querySelector("#player-score");
const makeDonutsButton = document.querySelector("#make-donuts");
const totalAutoClickers = document.querySelector("#auto-clicks-purchased");
const buyAcButton = document.querySelector("#store-button");
const costOfAc = document.querySelector("#auto-clicker-cost");

const fredDonutClicker = new donutClicker()

function gameDisplay() {
    playerDonutCount.value = donutClicker.getNumOfDonuts();
    autoClickersPurchased.value = donutClicker.getAutoClickerNum();
    autoClickerCost.value = donutClicker.getAutoClickerCost();
    donutsPerClick.value = donutClicker.getNumOfDonutsPerClick();
    autoClickerButton.disabled = donutClicker.updateStoreButton();
}

gameDisplay();

donutMakerButton.addEventListener("click", function() {
    donutClicker.makeADonut();
    gameDisplay();
});

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


