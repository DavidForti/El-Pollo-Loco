class COINTS extends MovableObject{

    height= 200;
    width = 200;

    y= 50;

    IMAGES_WALKING =[
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
      
    ];
   

    constructor(){
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 450 + Math.random() * 1000;
       
        this.animate();
    }
   
    animate(){
        setInterval(() =>{
            this.playAnimation(this.IMAGES_WALKING)
        }, 200);
    }
}