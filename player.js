class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = 0;
    }

    getplayerCount(){
        var countRef = database.ref('playerCount');
        countRef.on("value", function(data){
            playerCount = data.val();
        });
    }

    getRank(){
        var Rankref = database.ref('Rank');
        Rankref.on("value",(data)=>{
            this.rank = data.val();
        });
    }

    updateplayerCount(count){
        var countRef = database.ref('/');
        countRef.update({
            'playerCount' : count
        });
    }

    updateRank(rank){
        var Rankref = database.ref('/');
        Rankref.update({
            'Rank' : rank
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