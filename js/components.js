

class Component {
    constructor(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = ""
    this.speedX = 0;
    this.speedY = 0;
    }

    // update() {
    //    draw() {
    //    ctx.drawImage(this.img, 211, 530, 75, 150);
    // }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
      }

    //   left() {
    //     return this.x;
    //   }
    //   right() {
    //     return this.x + this.width;
    //   }
    //   top() {
    //     return this.y;
    //   }
    //   bottom() {
    //     return this.y + this.height;
    //   }

    //   crashWith(obstacle) {
    //     return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    //   }

}

const carImg = new Image();
carImg.src = "/images/car.png"

const car = new Component(211, 530, 75, 150)
car.image = carImg.src
console.log(car)




//const myObstacles = [];