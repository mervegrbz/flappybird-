export default class ball{
constructor(board, width,height){
    this.radius=8;
    this.color="red";
    this.x=40;
    this.y=height/2;
    this.gravity=0.1;
    this.speed = 0;
    this.image=new Image();

}
draw(board){
    // board.fillStyle=this.color;
    // board.beginPath();
    // board.arc(this.x,this.y,this.radius,0,2*Math.PI);
    // board.fill();
    this.image.src="./ball.png";
    board.drawImage(this.image,this.x,this.y,30,30);

}
update(){
    if(this.y<=10){
        this.y=this.radius;
        this.gravity=0.1;
        this.speed=0;
    }
    if(this.y>=500-10){
        this.y=480;
          
    }
    else{

        this.gravity +=0.1;
        this.gravity = Math.min(this.gravity,0.1);
        this.speed = Math.max (this.gravity+this.speed,-4)
        this.y += this.speed;
        

    }


}

jump(){
    
    this.gravity = -1.5;

}
}
