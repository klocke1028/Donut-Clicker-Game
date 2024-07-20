class donutClicker {
    constructor() {
        this.buttonClicks = 0;
        this.donutCounter = 1;

        this.autoClickCounter = 0;
        this.autoClickerCost = 100;
    }

    donutButtonClicked() {
        this.buttonClicks = this.buttonClicks + this.donutCounter;
    }

    getNumOfDonuts() {
        return this.buttonClicks;
    }

    addAutoClicker() {
        if (this.buttonClicks >= this.autoClickerCost) {
            this.buttonClicks = this.buttonClicks - this.autoClickerCost
            this.autoClickCounter++;
            this.increaseAutoCost();
        }
    }

    autoClickerFunction() {
        this.buttonClicks = this.buttonClicks + this.autoClickCounter * this.buttonClicks;
    }

    getAutoClickerNum() {
        return this.autoClickCounter;
    }

    increaseAutoCost () {
        this.autoClickerCost = this.autoClickerCost + (this.autoClickerCost + 20);
    }

    getCostOfAutoClicker () {
        return this.autoClickerCost;
    }

}