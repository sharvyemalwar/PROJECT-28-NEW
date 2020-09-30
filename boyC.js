
/*class boy{
    constructor(x, y, width, height) {
       
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
      }
      display(){
      
          
        imageMode(CENTER);
        image(this.image, 200, 400, this.width, this.height);
      
      }
}*/
class boyC{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.boy=Constraint.create(options)
		World.add(world,this.boy)
	}

	attach(body){
		this.boy.bodyA=body;
	}

	fly()
	{
		this.boy.bodyA=null;
	}

	display()
	{
		if(this.boy.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
} 
 
 
 
  