class Dustbin{
  constructor(x,y,width,height){
      var box_options={
          isStatic:true
      }
      this.bodies = Bodies.rectangle(x,y,width,height,box_options);

      this.width = width;
      this.height = height;

      World.add(world,this.bodies);
  }
  display(){
      var pos = this.bodies.position;
      var angle = this.bodies.angle;
      push();
      translate(pos.x,pos.y,);
     
      rotate (angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
  }
} 
