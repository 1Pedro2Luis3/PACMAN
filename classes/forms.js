class Form{
    constructor(){
        this.Input = createInput("");
        this.Button = createButton("PLAY");
        this.Title = createElement("h3","PAC-MAN II");
        this.Texto = createElement("h3");
    }
    
  Posicao(){
        this.Input.position(700,400);
        this.Button.position(730,500);
        this.Title.position(550,80);

        this.Texto.position(600,400);
    }

    style(){
        this.Input.class("Inputfonte");
        this.Button.class("Buttonfonte");
        this.Title.class("Titlefonte");
        this.Texto.class("Textofonte");
    }

    Show(){
        this.Posicao();
        this.style();
        this.ButtonClick();
    }

    ButtonClick(){
        this.Button.mousePressed(()=>{
            this.Input.hide();
            this.Button.hide();
            
            var TelaDeCarregamento = `Bem-Vindo, ${this.Input.value()}.</br> Aguarde os demais jogadores...`;
            this.Texto.html(TelaDeCarregamento);
        })
    }
}