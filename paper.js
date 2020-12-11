class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.8,
            friction:3.0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=70;
        this.body = Bodies.circle(this.x, this.y,this.r, options);
        this.image = loadImage("paper.png")
        //this.radius = 35;
        //this.width = width;
        //this.height = height;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("white");
      image(this.image,0, 0, this.r,this.r);
      pop()
      }
}
