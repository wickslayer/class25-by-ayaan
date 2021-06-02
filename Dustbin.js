class Dustbin{
    constructor(x,y,width,height){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.image = loadImage("Images/dustbingreen.png");
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255, 0.5);
        rect(pos.x, pos.y, this.width, this.height)
        image(this.image,pos.x,pos.y,33,33);
      }
}