class Drops {
    constructor(x, y){
        var options = {
            friction:2,
            density:2,
            restitution:0.1
                }
        this.body = Bodies.circle(x, y, 60, options);
        World.add(world, this.body);
    }
    display(){
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, 10);

    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,200), y: random(0,200)});
        }
    }
}
