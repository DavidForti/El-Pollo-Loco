class Chicken extends MovableObject{
    
    y = 325;
    height = 100;
    width = 90;


    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500; // Math.Radom platziert das chcicken zwischen 200 und 700
    }
}