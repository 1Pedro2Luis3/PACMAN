var database;
var form, game;

function preload(){
}
    
function setup(){
    createCanvas(800,800);
    
    database = firebase.database();

    game = new Game();
    game.Intro();
}

function draw(){
    background("white");
}