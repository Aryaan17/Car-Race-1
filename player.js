class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
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

    updatePlayerInfo(){
        var playerIndex = "players/player" + this.index;
        var nameRef = database.ref(playerIndex);
        nameRef.set({
            'name' : this.name,
            'distance' : this.distance
        });
    }

    static getAllPlayersInfo(){
        var playersRef = database.ref("players");
        playersRef.on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}