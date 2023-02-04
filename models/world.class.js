class World {
    character = new Character();

    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Cloud()
    ];

    background = [
        new Background ('img/5_background/layers/air.png',0),
        new Background('img/5_background/layers/3_third_layer/1.png', 0),
        new Background ('img/5_background/layers/2_second_layer/1.png',0),
        new Background ('img/5_background/layers/1_first_layer/1.png',0),
        new Background ('img/5_background/layers/air.png',729),
        new Background('img/5_background/layers/3_third_layer/2.png', 729.5),
        new Background ('img/5_background/layers/2_second_layer/2.png',729),
        new Background ('img/5_background/layers/1_first_layer/2.png',729),
        
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // varibale ctx wird mit cnavas.getContext('2d') deklariert
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)  // cleart den Avartar
        // welt wird mit verschoben 
        this.ctx.translate(this.camera_x,0);
        
        this.addToObjectMap(this.background);
        this.addToObjectMap(this.clouds);
        this.addToMap(this.character);
        this.addToObjectMap(this.enemies);
        // welt wird mit zurück verschoben
        this.ctx.translate(-this.camera_x,0);

        // draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addToObjectMap(Object){
        Object.forEach(o =>{ // schleife => funktion 
            this. addToMap(o); // geht in addTOMap
        });
    }

    addToMap(mo){
        if(mo.otherDirection){ //objekt 
            this.ctx.save(); // bilder werden gespeichert 
            this.ctx.translate(mo.width,0); // bilder werden eingefügt 
            this.ctx.scale(-1,1); //bilder werden gedreht 
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); 
        if(mo.otherDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();// bilder werden wider rückganing gemacht 
        }
    }

}