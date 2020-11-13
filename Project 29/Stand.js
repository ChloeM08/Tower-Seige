  
class Stand{

    constructor(x, y, width, height){
        var ground_options={
            isStatic : true
          }
        
          this.body = Bodies.rectangle(x, y, width, height, ground_options)
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          World.add(world,this.body);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  }