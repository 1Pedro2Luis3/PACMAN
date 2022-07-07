class Form{
    constructor(){
        this.Input = createInput("");
        this.Button = createButton("Play!");
        this.Title = createElement("h3","PAC-MAN II");
        this.Texto = createElement("h3");
    }
    
  Posicao(){
        this.Input.position(400,450);
        this.Button.position(450,420);
        this.Title.position(450,80);

        this.Texto.position(500,400);
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
            
            var TelaDeCarregamento = `Olá, ${this.Input.value()}.</br> Aguarde os demais jogadores...`;
            this.Texto.html(TelaDeCarregamento);
        })
    }
}