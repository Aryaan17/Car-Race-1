class Form{
    constructor(){
        this.inputBox = createInput("");
        this.button = createButton("Next");
        this.greeting = createElement('h4');
        this.label = createElement('h4');
        this.title = createElement('h1');
    }

    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(displayWidth/2, displayHeight-800);

        this.label.html("Name: ");
        this.label.position(displayWidth-880, displayHeight-620);

        this.inputBox.position(displayWidth-800, displayHeight-600);

        this.button.position(displayWidth-760, displayHeight-560);

        this.button.mousePressed(()=>{
            this.inputBox.hide();
            this.button.hide();
            this.label.hide();
            player.name = this.inputBox.value();
            playerCount += 1;
            player.index = playerCount;
            player.updatePlayerInfo();
            player.updateplayerCount(playerCount);
            this.greeting.html("Welcome to the car racing game,  "+ player.name);
            this.greeting.position(displayWidth-800, displayHeight-600);
        })
    }

    hide(){
        this.title.hide();
        this.inputBox.hide();
        this.button.hide();
        this.greeting.hide();
        this.label.hide();
    }
}