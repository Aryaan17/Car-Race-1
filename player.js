class Player{
    constructor(){

    }

    getplayerCount(){
        var countRef = database.ref('playerCount');
        countRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateplayerCount(count){
        var countRef = database.ref('/');
        countRef.update({
            'playerCount' : count
        });
    }

    updateName(name){
        var playerIndex = "player" + playerCount;
        var nameRef = database.ref(playerIndex);
        nameRef.set({
            'name' : name
        });
    }
}