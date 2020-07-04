var playerCount = 0;
var gameState = 0;
var player, form, game, allPlayers;
var database;
var car1, car2; //car3, car4;
var car = [];


function setup(){
    createCanvas(displayWidth-100, displayHeight-100);
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

    drawSprites();
}