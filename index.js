// -----Game Logic-----

let donutCount = 0;
let totalDonutsMade = 0;
let autoClickers = 0;
let autoClickerCost = 100;
let autoClickerInterval = null;

const playerScore = document.getElementById("player-score");
const totalDonutsMadeDisplay = document.getElementById("total-donuts-made");
const makeDonutsButton = document.getElementById("make-donuts");
const resetButton = document.getElementById("reset-button");
const autoClickersPurchased = document.getElementById(
  "auto-clickers-purchased"
);
const autoClickersCost = document.getElementById("auto-clicker-cost");
const storeButton = document.getElementById("store-button");

function updateUI() {
  playerScore.textContent = donutCount;
  autoClickersPurchased.textContent = autoClickers;
  autoClickerCost.textContent = autoClickerCost;
}

//Manual Donut Making
makeDonutsButton.addEventListener("click", () => {
  donutCount += 1;
  totalDonutsMade += 1;
  updateUI();
});

//Total Donuts Made Function
function updateUI() {
  playerScore.textContent = donutCount;
  autoClickersPurchased.textContent = autoClickers;
  autoClickersCost.textContent = autoClickerCost;
  totalDonutsMadeDisplay.textContent = totalDonutsMade;
}

//Buying Auto Clickers
storeButton.addEventListener("click", () => {
  if (donutCount >= autoClickerCost) {
    donutCount -= autoClickerCost;
    autoClickers += 1;

    autoClickerCost = Math.floor(autoClickerCost * 1.1);
    startAutoClickers();
    updateUI();
  } else {
    alert("Not enough Donuts!");
  }
});

//Auto Clicker Function
function startAutoClickers() {
  if (!autoClickerInterval) {
    autoClickerInterval = setInterval(() => {
      if (autoClickers > 0) {
        donutCount += autoClickers;
        totalDonutsMade += autoClickers;
        updateUI();
      }
    }, 1000);
  }
}

//Reset Function
resetButton.addEventListener("click", () => {
  donutCount = 0;
  autoClickers = 0;
  autoClickerCost = 100;
  clearInterval(autoClickerInterval);
  autoClickerInterval = null;
  updateUI();
});

updateUI();
