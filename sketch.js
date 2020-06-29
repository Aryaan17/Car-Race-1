var playerCount = 0;
var gameState = 0;
var player, form, game;
var database;

function setup(){
    var canvas = createCanvas(400, 400);
    database = firebase.database();
    game = new Game();
    game.getgameState();
    game.startGame();
}

function draw(){
    
}