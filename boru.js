export default class boru{
    constructor(board,width,height){
        this.width=40;
        this.x=width;
        this.height=Math.floor(Math.random()*height*0.5)+100;
        this.space=100;
        this.image=new Image();
        this.alt=new Image();


    }
draw(board, width,height){
    this.image.src="./boru3.png";
    this.alt.src="./boru4.png";
    //console.log("drawing a "+this.x  )
    board.fillStyle="green";

    board.drawImage(this.image,this.x,0,this.width,this.height);
    
    board.fillStyle="red";

    board.drawImage(this.alt,this.x,this.height+this.space, this.width,height-this.height-this.space);
    
   
}

}