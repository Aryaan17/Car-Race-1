var playerCount = 0;
var gameState = 0;
var player, form, game, allPlayers;
var database;
var car1, car2; //car3, car4;
var carImg1, carImg2, trackImg;
var car = [];
var rank = 0;
var carSound;

function preload(){
    carImg1 = loadImage("images/car1.png");
    carImg2 = loadImage("images/car2.png");
    trackImg = loadImage("images/track.jpg");
    carSound = loadSound("sounds/formula+1.mp3");
}

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
        drawSprites();
    }
    if(gameState === 2){
        game.end();
        console.log(player.name + " Rank:" + player.rank);
    }

}