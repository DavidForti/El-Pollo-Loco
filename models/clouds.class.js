class Cloud  extends MovableObject{

    width = 500;
    height = 300;
    y = 50;

    constructor(){
        super().loadImage(' img/5_background/layers/4_clouds/1.png');

        this.x = 200 + Math.random() * 500; // Math.Radom platziert das chcicken zwischen 200 und 700
        this.animate();

    }

    animate(){
        setInterval(() => { // setinterval ist für die animation 
            this.x -= 0.15; // wird 0,15 px nach links gesetzt 
        }, 1000 / 60); // mit 60 FPS 
    }
}

