class MovableObject{
    x = 120;
    y = 150;
    img;
    height = 280;
    width = 150;
    
    
    // ist wie loadImage('img/test.png')
    loadImage(path){
        this.img = new Image(); // ist gleich wie <img> tak 
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right');
    };
    moveLeft(){

    }
}