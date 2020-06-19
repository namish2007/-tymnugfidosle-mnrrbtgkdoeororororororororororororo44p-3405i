class ground{
    constructor(x,y,width,height){
        var opt2 = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,opt2);
        this.width = width;
        this.height = height;
       
        World.add(world,this.body);

    }
    display(){
        var pos2 = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
rect(pos2.x,pos2.y,this.width,this.height);
  pop();

    }

};