class walls{

constructor(x,y,width,height){

var options = {

'restitution' : 0,
'isStatic' : true,

}
width=this.width;
height=this.height;

this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);


}

display(){

var pos = this.body.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER)
fill("white")
rect(0,0,this.width,this.height)
pop();


}


}