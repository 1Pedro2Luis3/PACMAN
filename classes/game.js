class Game{
    constructor(){
        this.ButtonReset = createButton("Resetar");
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
       pacman.addImage("amarelo", pacmanPadrao);
       //pacman.addAnimation("marrom", pacmanCereja);
       //pacman.addAnimation("vermelho", pacmanMaca);
       //pacman.addAnimation("azul", pacmanMorango);

       //pacman.changeImage("amarelo");

       frutas = createSprite(500,500);
       frutas.addImage("CEREJA", cereja);
       frutas.addImage("MACA", maca);
       frutas.addImage("MORANGO", morango);

       frutas.changeImage("MACA");
    }  
       
    Start(){
        Player.GetPlayersInfo();
        this.ChangeElements();
        this.ButtonResetar();

        console.log("start 1");
       if(AllPlayers !== undefined){
          console.log("deu certo!!!");
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
    
    ChangeElements(){
        form.Hide();
        this.ButtonReset.class("ButtonFonte");
        this.ButtonReset.position(200,200);
    }

    ButtonResetar(){
        this.ButtonReset.mousePressed(()=>{
            database.ref("/").set({
                playerCount: 0,
                gameState: 0,
                Players: {}
            });
        window.location.reload();
        })
    }
}