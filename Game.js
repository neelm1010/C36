class Game{
    constructor()
    {

    }

    getState()
    {
        console.log("Lets get the game state:")
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log(gameStateRef)
    }
    update(state)
    {
       database.ref('/').update({
           gameState:state
       });
    }
    async start(){
        if(gameState===0)
        {
            console.log("New player getting created:")
            player=new Player();
            player.getCount();
            console.log("New Form is created:")
            form=new Form();
            form.display();
        }

    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined)
        {
            var displayPosition=130;
            for(var plr in allPlayers)
            {
                if (plr === "player" + player.index)
                   fill("red");
                else
                  fill("black");
                  displayPosition+=20;
                  textSize(15);
                  text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,displayPosition)
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }
    }
}