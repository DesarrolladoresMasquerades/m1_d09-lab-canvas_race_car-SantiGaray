window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
    

  };

  function startGame() {
    

    road()
    // document.getElementById('canvas').classList.add("canvas");
    // car.draw()
  
  
  }
};


  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  
// --------------------- GAME AREA ------------------------------

const myRoadArea = {
  canvas: document.createElement("canvas"),
  frames: 0,

  start: function() {
      this.canvas.width = 480
      this.canvas.height = 270
      this.context = this.canvas.getContext("2d")
      document.body.insertBefore(this.canvas, document.body.childNodes[0])

      this.interval = setInterval(updateGameArea, 20)
      
  
  },

  clear: function () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  
  stop: function () {
    clearInterval(this.interval)
    },

  score: function () {
      const points = Math.floor(this.frames / 5);
      this.context.font = '18px serif';
      this.context.fillStyle = 'black';
      this.context.fillText(`Score: ${points}`, 350, 50);
    },

  
}
//         --------- CAR ----------

  
  function road () {
    const road = new Image();
    road.src = '/images/road.png';
    road.onload = () => {
      ctx.drawImage(road,0,0,500,700)
    }
  }




  // const car = {
  //   animating: true,
  //   img: carImg,
  //    x: 0,
  //    y: 0,
  //     draw() {
  //     ctx.drawImage(this.img, 211, 530, 75, 150);
  //     if(this.animating){
  //       frameNumber = requestAnimationFrame(this.draw.bind(this))
  //                       }
  //     }

  // }


  // // -----------------CAR MOVE----------------

  // document.addEventListener('key', (e) => {
  //   switch (e.key) {
    
  //     case 'LeftArrow':
  //       car.speedX -= 1;
  //       break;
  //     case 'RightArrow':
  //       car.speedX += 1;
  //       break;
  //   }
  // });

  