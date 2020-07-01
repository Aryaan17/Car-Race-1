class Form{
    constructor(){
        this.inputBox = createInput("Name: ");
        this.button = createButton("Next");
        this.greeting = createElement('h4');
    }

    display(){
        var title = createElement('h1');
        title.html("Multiplayer Car Racing Game");
        title.position(130, 0);

        this.inputBox.position(130, 160);

        this.button.position(250, 200);

        this.button.mousePressed(()=>{
            this.inputBox.hide();
            this.button.hide();
            player.name = this.inputBox.value();
            playerCount += 1;
            player.index = playerCount;
            player.updatePlayerInfo();
            player.updateplayerCount(playerCount);
            this.greeting.html("Welcome to the car racing game,  "+ player.name);
            this.greeting.position(130, 160);
        })
    }

    hide(){
        this.inputBox.hide();
        this.button.hide();
        this.greeting.hide();
    }
}