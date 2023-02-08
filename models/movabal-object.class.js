class MovableObject{
    x = 120;
   
    img;
    height = 280;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed =0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;

    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        return this.y <150;
    }
    
    // ist wie loadImage('img/test.png')
    loadImage(path){
        this.img = new Image(); // ist gleich wie <img> tak 
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path]= img;
        });
  
    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length;
                // i = 0,1,2,3,4,5 ƒ
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }
    
    moveLeft(){
        setInterval(() => { // setinterval ist für die animation 
            this.x -= this.speed; // wird 0,15 px nach links gesetzt 
        }, 1000 / 60); // mit 60 FPS 
    }

}
