class Chicken extends MovableObject{
    
    y = 325;
    height = 100;
    width = 90;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; // Math.Radom platziert das chcicken zwischen 200 und 700
        this.speed = 0.15 + Math.random()* 0.9;// zufällige zahl
        this.animate();
    }
    /**
     * chicken animation 
     */

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
        }, 1000 / 60); 

        setInterval(() =>{
            this.playAnimation(this.IMAGES_WALKING)
        }, 200);
    }
}