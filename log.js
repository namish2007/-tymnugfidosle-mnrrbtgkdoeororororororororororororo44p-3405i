class log{
    constructor(x,y,height,angle) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':2.0,
       
      }
        this.body = Bodies.rectangle(x,y,20,height,options);
      this.width = 20;   
      this.height = height;
   Matter.Body.setAngle(this.body,angle);
     this.image = loadImage("sprites/wood2.png")
        World.add(world,this.body);
    }
    display(){
      var angle = this.body.angle;
       var pos = this.body.position; 
      push();
       translate(pos.x, pos.y);
       rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
};