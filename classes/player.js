class Player{
    constructor(){ 
        this.Name = null;
        this.Index = null;
        this.Pontuacao = 0;
        this.Life = 3;
        this.Invent = 0;
        this.x = 0;
        this.y = 0;
    }
    
    //Adiciona o player no banco de dados
    AddPlayers(){
        var PlayerIndex = "Players/Player"+this.Index;
        database.ref(PlayerIndex).set({
            Name: this.Name,
            Score: this.Pontuacao,
            Life: this.Life,
            Inventario: this.Invent
        });
    }

    //Le e salva as informaçôes dos jogadores no banco de dados
    static GetPlayersInfo(){
        var PlayerInfo = database.ref("Players");
        PlayerInfo.on("value", data => {
            AllPlayers = data.val();
        });
    }

    UpdateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    GetCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val();
        });
    }

    Update(){
        var PlayerIndex = "Players/Player"+this.Index;
        database.ref(PlayerIndex).update({
            Name: this.Name,
            Score: this.Pontuacao,
            Life: this.Life,
           Inventario: this.Invent
        })
    }
}