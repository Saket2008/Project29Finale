class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.3,
            'density':0.00001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        rectMode(CENTER);
        fill("skyblue");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}