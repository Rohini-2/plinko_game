class particle {
    constructor(x, y, width, height) {
     var options={
       isStatic:true,
     }
     this.body=Bodies.cricle(x,y,this.r,options);
     this.color=color(random(0,255),random(0,255),random(0,255));
     world.add(world,this.body)
    }
    
}
