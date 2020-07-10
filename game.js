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
        car1 = createSprite(displayWidth- 800, displayHeight- 200, 20, 20);
        car1.addImage(carImg1); 
        car2 = createSprite(displayWidth- 600, displayHeight- 200, 20, 20);
        car2.addImage(carImg2);
        //car3 = createSprite(displayWidth- 400, displayHeight- 200);
        //car4 = createSprite(displayWidth- 200, displayHeight- 200);
        car = [car1, car2 /*, car3, car4*/];
    }

    play(){
        form.hide();
        textSize(25);
        text("THE GAME HAS BEGUN", 130, 100);
        Player.getAllPlayersInfo();
        if(allPlayers!=undefined){
            image(trackImg, displayWidth-displayWidth, -displayHeight*3.5, displayWidth, displayHeight*5);
            var index = 0;
            var x = displayWidth-1000;
            var y = 20;
            for(var plr in allPlayers){
                y = displayHeight - allPlayers[plr].distance;
                x = x + 200;
                car[index].x = x;
                car[index].y = y;
                index = index + 1;
                if(index === player.index){
                    car[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = car[index-1].y;
                    console.log(car[index-1].y);
                }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null&& player.distance<3500){
            player.distance += 50;
            player.updatePlayerInfo();
        }
        if(player.distance===3500){
            gameState= 2;
        }
    }

    end(){
        console.log("GAME OVER");
        game.updategameState(2);
    }
}