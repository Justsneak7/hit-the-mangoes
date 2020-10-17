class Band{
    constructor(pointA,bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.004
        }
     this.pointA = pointA
        this.band = Constraint.create(options);
        World.add(world, this.band);
    }

    fly(){
        this.band.bodyB = null;
    }

   


  display(){
    push();
    strokeWeight(3);
    pop();
  }   
}
