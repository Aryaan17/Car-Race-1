class Game {
    constructor(){

    }

    getgameState(){
        var gameRef = database.ref('gameState');
        gameRef.on("value", function(data){
            gameState = data.val();
        });
    }

    updategameState(state){
        var gameRef = database.ref('/');
        gameRef.update({
            'gameState' : state
        });
    }

    startGame(){
        if (gameState === 0){
            player = new Player();
            player.getplayerCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(25);
        text("THE GAME HAS BEGUN", 130, 100);
        Player.getAllPlayersInfo();
        if(allPlayers!=undefined){
            var positionY = 150;
            for(var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("red");
                }
                else {
                    fill("black");
                }
                positionY = positionY + 20;
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, positionY);
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance += 50;
            player.updatePlayerInfo();
        }
    }
}