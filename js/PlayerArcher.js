class PlayerArcher {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/playerArcher.png")
    World.add(world, this.body);


    //Matter.body.setAngle(this.body, -PI / 2)
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if (keyCode === "UP" && playerArcher.body.angle < 1.77) {
          angleValue = 0.1
        }else{
            //angleValue = -0.1
        }

        if(keyCode === "DOWN" && playerArcher.body.angle > 1.47) {
          angleValue = -0.1
        }else{
              //angleValue = 0.1
        }
    
    }
    
}






    


