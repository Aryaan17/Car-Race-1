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
}