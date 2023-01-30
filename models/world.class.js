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
        
    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // varibale ctx wird mit cnavas.getContext('2d') deklariert
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();


    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)  // cleart den Avartar
        
        this.addToObjectMap(this.background);
        this.addToObjectMap(this.clouds);
        this.addToMap(this.character);
        this.addToObjectMap(this.enemies);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height); 
    }

}