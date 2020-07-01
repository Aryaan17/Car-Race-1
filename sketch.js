var playerCount = 0;
var gameState = 0;
var player, form, game, allPlayers;
var database;


function setup(){
    createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.getgameState();
    game.startGame();
}

function draw(){
    if(playerCount === 2){
        game.updategameState(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}