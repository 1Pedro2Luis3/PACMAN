class Game{
    constructor(){
    }
    
    Intro(){
       player = new Player();
       playerCount = player.GetCount();
       

       form = new Form();
       form.Show();

       fantasma_laranja = createSprite(100,100);
       fantasma_laranja.addImage(fantasma1);

       fantasma_azul = createSprite(150,150);
       fantasma_azul.addImage(fantasma2);

       fantasma_rosa = createSprite(200,200);
       fantasma_rosa.addImage(fantasma3);

       fantasma_vermelho = createSprite(250,250);
       fantasma_vermelho.addImage(fantasma4);

       pacman = createSprite(300,300);
       pacman.addAnimation(pacmanPadrao);
       pacman.addAnimation(pacmanCereja);
       pacman.addAnimation(pacmanMaca);
       pacman.addAnimation(pacmanMorango);

       frutas = createSprite(350,350);
       frutas.addImage(cereja);
       frutas.addImage(maca);
       frutas.addImage(morango);
    }  
       
    Start(){
       if(AllPlayers !== undefined){
          Parede1 = createSprite(10,400,200,5);
          drawSprites();
       }
    }

    UpdateState(State){
        database.ref("/").update({
            gameState: State
        })
    }

    GetState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        });
    }
}