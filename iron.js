class Iron {
	constructor(x,y,width,height){
	// assign options to the iron square
	var options={
		'restitution':0.8,
		'friction':3,
		'density':30
	};
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;

		this.body=Bodies.rectangle(this.x, this.y, width, height, options);
		World.add(world, this.body);

	};
	display(){
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("gray");
			fill("black");
			//draw the ellipse here to display the iron square
			rect(0,0,this.width,this.height);
			pop();
	};

};