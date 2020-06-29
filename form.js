class Form{
    constructor(){

    }

    display(){
        var title = createElement('h1');
        title.html("Multiplayer Car Racing Game");
        title.position(130, 0);

        var inputBox = createInput("Name: ")
        inputBox.position(130, 160);

        var button = createButton("Next");
        button.position(250, 200);

        var greeting = createElement('h4');


        button.mousePressed(function(){
            inputBox.hide();
            button.hide();
            var plName = inputBox.value();
            playerCount += 1;
            player.updateName(plName);
            player.updateplayerCount(playerCount);
            greeting.html("Welcome to the car racing game, "+ plName);
            greeting.position(130, 160);
        })
    }
}