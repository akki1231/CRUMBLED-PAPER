class paper {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction:0.5,
          density:1.2

        }
        this.width = width;
        this.height = height;
        this.body = Bodies.circle(x,y,width,height,options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position; 
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0, this.width, this.height);
}     
}