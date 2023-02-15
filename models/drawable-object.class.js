class DrawableObejct {

    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    height = 280;
    width = 150;



    // ist wie loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // ist gleich wie <img> tak 
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * 
     * @param {Array} arr - [' img/image1.png', ......]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

}