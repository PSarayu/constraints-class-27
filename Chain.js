class Chain{
    constructor(bodyA,bodyB){
     var options={
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.04,
         length:10
     }
     this.chain=con.create(options)
     World.add(world,this.chain)

    }

    display(){
        var pos=this.chain.bodyA.position
        var posi=this.chain.bodyB.position

        line(pos.x,pos.y,posi.x,posi.y)
    }
}