class donutClicker {
    
    constructor() {
        this.buttonClicks = 0;
        this.donutCounter = 1;

        this.autoClickCounter = 0;
        this.autoClickerCost = 100;
        this.autoClickerCount = 0;
        this.autoClicksPerSec = 0;
        this.buyAutoClickerButtonDisabled = true;
    }

    makeADonut() {
        this.buttonClicks += this.donutCounter;
    }

    getNumOfDonuts() {
        return Math.round(this.buttonClicks);
    }

    getNumOfDonutsPerClick() {
        return this.donutCounter;
    }

    addAutoClicker() {
        this.autoClickCounter += 1;
        this.buttonClicks -= this.autoClickerCost;
        this.autoClicksPerSec += 1;
        this.autoClickerCost = this.autoClickerCost += 20;
    }

    getAutoClickerNum() {
        return this.autoClickCounter;
    }

    getAutoClickerCost () {
        return this.autoClickerCost;
    }

    getAutoClicksPerSecond () {
        return this.autoClicksPerSec
    }

    updateStoreButton() {
        if (this.autoClickerCost <= this.buttonClicks){
            this.buyAutoClickerButtonDisabled = false;
        } else {
            document.querySelector("#store-button").style.color = "rgb(100, 100, 100)";
            this.buyAutoClickerButtonDisabled = true;
        }
    }

    resetGame() {
        this.buttonClicks = 0;
        this.autoClickerCount= 0;
        this.autoClickerCost = 100;
        this.autoClicksPerSec = 0;
        this.donutCounter = 1;
        this.buyAutoClickerButtonDisabled = true;
    }





}