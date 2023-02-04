class MovableObject{
    x = 120;
    y = 150;
    img;
    height = 280;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed =0.15;
    otherDirection = false;
    
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

    moveRight(){
        console.log('Moving right');
    };
    moveLeft(){
        setInterval(() => { // setinterval ist für die animation 
            this.x -= this.speed; // wird 0,15 px nach links gesetzt 
        }, 1000 / 60); // mit 60 FPS 
    }
}