class World {
    character = new Character();
    level = level1
    enemies = level1.enemies;
    clouds = level1.clouds;
    background = level1.background;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // varibale ctx wird mit cnavas.getContext('2d') deklariert
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        }, 1000);
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)  // cleart den Avartar
        // welt wird mit verschoben 
        this.ctx.translate(this.camera_x, 0);
        this.addToObjectMap(this.level.background);

        this.ctx.translate(-this.camera_x, 0);// Back
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); // Forwards


        this.addToMap(this.character);
        this.addToObjectMap(this.level.clouds);
        
        this.addToObjectMap(this.level.enemies);
        // welt wird mit zurück verschoben
        this.ctx.translate(-this.camera_x, 0);

        // draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addToObjectMap(Object) {
        Object.forEach(o => { // schleife => funktion 
            this.addToMap(o); // geht in addTOMap
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        //objekt 
        this.ctx.save(); // bilder werden gespeichert 
        this.ctx.translate(mo.width, 0); // bilder werden eingefügt 
        this.ctx.scale(-1, 1); //bilder werden gedreht 
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();// bilder werden wider rückganing gemacht 
    }

}