class Box {
    constructor(x,y,width,height){
        var box_options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height); 
        pop();
    }
}