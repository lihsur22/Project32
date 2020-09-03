class Blocc{
    constructor(x,y,c){
        var options = {
            restitution:0.5,
            friction:1,
            density:1
        }
        
        this.x = x;
        this.y = y;
        this.c = c;
        this.body = Bodies.rectangle(this.x,this.y,30,40,options);
        World.add(world,this.body);
        this.visiblity = 255;
    }



    display(){
        var pos = this.body.position;
        var col = this.c
        
        if(this.body.speed < 3) 
        {
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);

            switch(col){
                case 1:
                    fill("#86CDE9");
                    break;
                case 2:
                    fill("#FEBFCA");
                    break;
                case 3:
                    fill("#3EDFCF");
                    break;
                case 4:
                    fill("#7F7F7F");
                    break;
                default:
                    break;
            }

            strokeWeight(2);
            rectMode(CENTER);
            rect(0, 0, 30, 40);
            pop();
        } else 
        {
            World.remove(world, this.body);
            push();
            pop();
        }
    }
};