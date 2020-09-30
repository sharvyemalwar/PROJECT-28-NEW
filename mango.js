
/*class mango{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
           'restitution':0,
           'friction':1,
           
       }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);

        imageMode(CENTER);
       // image(this.image,500,100,this.width, this.height);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
       
    }
}*/
 
class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}
 
 
  