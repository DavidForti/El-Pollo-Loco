class Background extends MovableObject{

    width = 730;
    height = 480;

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; // höche wrid berechnet ges. sind 480 - variable height = 80 px
          
           

    }


}