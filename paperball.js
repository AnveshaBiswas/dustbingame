class Paper{
    constructor(x,y,radius){
        var options={
               isStatic:false,
               restitution:0.3,
               friction:0.5,
               density:1.2


        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = this.radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(50, 50, 30, 30); 
        ellipseMode(CENTER);
        fill("violet");
        ellipse(50, 50, 30, 30);
        pop();
    }
}