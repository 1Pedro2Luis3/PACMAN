var database;
var AllPlayers, playerCount, gameState;
var form, game, player;
var Parede1, Parede2, Parede3, Parede4, Parede5, Parede6, Parede7, Parede8, Parede9, Parede10, Parede11, Parede12, Parede13, Parede14, Parede15, Parede16, Parede17, Parede18, Parede19, Parede20, Parede21, Parede22, Parede23, Parede24, Parede25, Parede26, Parede27, Parede28, Parede29, Parede30, Parede31, Parede32;
var bolinha;
var GrupoDeBolinhas, GrupoDeParedes;
var fantasma_laranja, fantasma1;
var fantasma_azul, fantasma2;
var fantasma_rosa, fantasma3;
var fantasma_vermelho, fantasma4;
var pacman, pacmanPadrao, pacmanCereja,  pacmanMaca, pacmanMorango;
var frutas, cereja, maca, morango;
var Players = [];

function preload(){
    fantasma1 = loadImage("images/fantasma_laranja.png");
    fantasma2 = loadImage("images/fantasma_azul.png");
    fantasma3 = loadImage("images/fantasma_rosa.png");
    fantasma4 = loadImage("images/fantasma_vermelho.png");
    pacmanPadrao = loadAnimation("images/pacman_padrao1.png", "images/pacman_padrao2.png");
    pacmanCereja = loadAnimation("images/pacman_poder_cereja1.png","images/pacman_poder_cereja2.png");
    pacmanMaca = loadAnimation("images/pacman_poder_maca1.png","images/pacman_poder_maca2.png");
    pacmanMorango = loadAnimation("images/pacman_poder_morango1.png","images/pacman_poder_morango2.png");
    cereja = loadImage("images/cereja.png");
    maca = loadImage("images/maca.png");
    morango = loadImage("images/morango.webp");

}//"images/pacman_padrao.png",
    
function setup(){
    createCanvas(800,800);
    
    database = firebase.database();

    game = new Game();
    game.GetState();
    game.Intro();
}

function draw(){
    background("white");

    if(playerCount === 2){
       game.UpdateState(1);
    }

    if(gameState === 1){
        background("blue");
        game.Start();
    }
}