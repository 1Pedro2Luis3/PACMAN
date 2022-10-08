class Game{
    constructor(){
        this.ButtonReset = createButton("Resetar");
    }
    
    Intro(){
       player = new Player();
       playerCount = player.GetCount();
       
       form = new Form();
       form.Show();
       
       GrupoDeBolinhas = new Group();
       GrupoDeParedes = new Group();
       
       fantasma_laranja = createSprite(330,420);
       fantasma_laranja.addImage(fantasma1);
       fantasma_laranja.scale = 0.15;
       
       fantasma_azul = createSprite(380,420);
       fantasma_azul.addImage(fantasma2);
       fantasma_azul.scale = 0.15;

       fantasma_rosa = createSprite(430,420);
       fantasma_rosa.addImage(fantasma3);
       fantasma_rosa.scale = 0.15;

       fantasma_vermelho = createSprite(480,420);
       fantasma_vermelho.addImage(fantasma4);
       fantasma_vermelho.scale = 0.15;

       pacman = createSprite(405,520);
       pacman.scale = 0.15;
       pacman.addAnimation("amareloD", pacmanDireita);
       pacman.addAnimation("amareloE", pacmanEsquerda);
       pacman.addAnimation("amareloC", pacmanCima);
       pacman.addAnimation("amareloB", pacmanBaixo);
      
       //pacman.addAnimation("marrom", pacmanCereja);
       //pacman.addAnimation("vermelho", pacmanMaca);
       //pacman.addAnimation("azul", pacmanMorango);

       Players = [pacman, fantasma_rosa]; 
        //fantasma_laranja, fantasma_azul, fantasma_vermelho];

       /*frutas = createSprite(500,500);
       frutas.addImage("CEREJA", cereja);
       frutas.addImage("MACA", maca);
       frutas.addImage("MORANGO", morango);*/

       //frutas.changeImage("MACA");

       Parede1 = createSprite(400,200,775,5);
       GrupoDeParedes.add(Parede1);

       Parede2 = createSprite(15,498,5,590);
       GrupoDeParedes.add(Parede2);

       Parede3 = createSprite(785,498,5,590);
       GrupoDeParedes.add(Parede3);

       Parede4 = createSprite(400,790,775,5);
       GrupoDeParedes.add(Parede4);

       Parede5 = createSprite(225,260,5,115);
       GrupoDeParedes.add(Parede5);

       Parede6 = createSprite(575,260,5,115);
       GrupoDeParedes.add(Parede6);

       Parede7 = createSprite(400,310,220,5);
       GrupoDeParedes.add(Parede7);

       Parede8 = createSprite(120,250,70,5);
       GrupoDeParedes.add(Parede8);

       Parede9 = createSprite(85,282,5,70);
       GrupoDeParedes.add(Parede9);

       Parede10 = createSprite(155,282,5,70);
       GrupoDeParedes.add(Parede10);

       Parede11 = createSprite(120,315,70,5);
       GrupoDeParedes.add(Parede11);

       Parede12 = createSprite(120,380,70,5);
       GrupoDeParedes.add(Parede12);

       Parede13 = createSprite(292,425,5,100);
       GrupoDeParedes.add(Parede13);

       Parede14 = createSprite(507,425,5,100);
       GrupoDeParedes.add(Parede14);

       Parede15 = createSprite(400,475,220,5);
       GrupoDeParedes.add(Parede15);

       Parede16 = createSprite(325,375,70,5);
       GrupoDeParedes.add(Parede16);

       Parede17 = createSprite(475,375,70,5);
       GrupoDeParedes.add(Parede17);

       Parede18 = createSprite(680,380,70,5);
       GrupoDeParedes.add(Parede18);

       Parede19 = createSprite(680,250,70,5);
       GrupoDeParedes.add(Parede19);

       Parede20 = createSprite(645,282,5,70);
       GrupoDeParedes.add(Parede20);

       Parede21 = createSprite(715,282,5,70);
       GrupoDeParedes.add(Parede21);

       Parede22 = createSprite(680,315,70,5);
       GrupoDeParedes.add(Parede22);

       Parede23 = createSprite(680,460,70,5);
       GrupoDeParedes.add(Parede23);

       Parede24 = createSprite(120,460,70,5);
       GrupoDeParedes.add(Parede24);

       Parede25 = createSprite(400,550,380,5);
       GrupoDeParedes.add(Parede25);

       Parede26 = createSprite(120,580,5,90);
       GrupoDeParedes.add(Parede26);

       Parede27 = createSprite(680,580,5,90);
       GrupoDeParedes.add(Parede27);

       Parede28 = createSprite(202,620,170,5);
       GrupoDeParedes.add(Parede28);

       Parede29 = createSprite(593,620,170,5);
       GrupoDeParedes.add(Parede29);

       Parede30 = createSprite(400,630,5,160);
       GrupoDeParedes.add(Parede30);

       Parede31 = createSprite(200,705,180,5);
       GrupoDeParedes.add(Parede31);

       Parede32 = createSprite(593,705,180,5);
       GrupoDeParedes.add(Parede32);

    for (var a = 230; a < 770; a+=40){
       bolinha = createSprite(55,a,10,10);
       GrupoDeBolinhas.add(bolinha);
       bolinha = createSprite(750,a,10,10);
       GrupoDeBolinhas.add(bolinha);
    }
    for(var b = 55; b < 745; b+=40){
       bolinha = createSprite(b,750,10,10);
       GrupoDeBolinhas.add(bolinha);
    }
    for (var c = 55; c < 770; c+=40){
       bolinha = createSprite(c,350,10,10);
       GrupoDeBolinhas.add(bolinha);
    }
    for (var d = 95; d < 375; d+=40){
       bolinha = createSprite(d,670,10,10);
       GrupoDeBolinhas.add(bolinha);
    }
    for (var e = 450; e < 740; e+=40){
       bolinha = createSprite(e,670,10,10);
       GrupoDeBolinhas.add(bolinha);
    }
    for (var f = 230; f < 600; f+=40){
       bolinha = createSprite(620,f,10,10);
       GrupoDeBolinhas.add(bolinha);
       bolinha = createSprite(180,f,10,10);
       GrupoDeBolinhas.add(bolinha);
    }
    for (var g = 180; g < 360; g+=40){
      bolinha = createSprite(g,590,10,10);
      GrupoDeBolinhas.add(bolinha);
    }
    for (var h = 450; h < 600; h+=40){
      bolinha = createSprite(h,590,10,10);
      GrupoDeBolinhas.add(bolinha);
    }
    for (var i = 100; i < 200; i+=40){
      bolinha = createSprite(i,428,10,10);
      GrupoDeBolinhas.add(bolinha);
      bolinha = createSprite(i,508,10,10);
      GrupoDeBolinhas.add(bolinha);
    }

    for (var j = 660; j < 710; j+=40){
      bolinha = createSprite(j,428,10,10);
      GrupoDeBolinhas.add(bolinha);
      bolinha = createSprite(j,508,10,10);
      GrupoDeBolinhas.add(bolinha);
    }  
  }
       
    Start(){
        Player.GetPlayersInfo();
        this.ChangeElements();
        this.ButtonResetar();

    if(AllPlayers !== undefined){
        this.Colisao();
        var i=0;
        for(var plr in AllPlayers){
           i+=1;
           var x = AllPlayers[plr].x;
           var y = AllPlayers[plr].y;
           Players[i-1].x = x;
           Players[i-1].y = y;
        if(i == player.Index){
            this.Mov(i);
            fill("white");
            ellipse(x,y,25);
          }
         }
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
    
    Mov(i){
        if(keyDown("LEFT_ARROW")){
          player.x-=8;
          if(i == 1){
            Players[i-1].changeAnimation("amareloE", pacmanEsquerda);
          }
          player.Update();
        }

        if(keyDown("RIGHT_ARROW")){
          player.x+=8;
          if(i == 1){
            Players[i-1].changeAnimation("amareloD", pacmanDireita);
          }
          player.Update();
        }

        if(keyDown("UP_ARROW")){
          player.y-=8;
          if(i == 1){
            Players[i-1].changeAnimation("amareloC", pacmanCima);
          }
          player.Update();
        }

        if(keyDown("DOWN_ARROW")){
          player.y+=8;
          if(i == 1){
            Players[i-1].changeAnimation("amareloB", pacmanBaixo);
          }
          player.Update();
        }
    } 
    
    Colisao(){
      pacman.overlap(GrupoDeBolinhas,function(collector,collected){
          collected.remove();
          player.Pontuacao +=100;
          player.Update();
      })
      
      pacman.collide(GrupoDeParedes);
    }
} //chave da classe