class Stone{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 16, options);
        World.add(world, this.body);
    }    

    display() {
        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        //ellipseMode(CENTER);
        //ellipse(0, 0, 32);
        strokeWeight(2);
        fill("yellow");
        beginShape();vertex(16, 0);vertex(8,-16);vertex(-8,-16);vertex(-16, 0);vertex(-8,16);vertex(8,16);
        endShape(CLOSE);
        pop();
    }
};