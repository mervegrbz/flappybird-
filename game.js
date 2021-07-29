import ball from './ball.js';
import handler from "./handler.js";
import boru from "./boru.js";
var board=document.getElementById('canvas').getContext('2d');
var text=document.getElementById("canvas2").getContext('2d');
var bg=new Image();
bg.src="./pg.png";
var width=500;
var height=500;
var animation;
var ball1= new ball(board,width, height);
var boru1 =new boru(board,width, height);
var borular=[];
var score=0;
borular.push(boru1);
var myreq;
var speed=-2;
document.addEventListener("click",event =>{
    console.log(start);
    game();
    start=true;
    
});
//console.log(start);
// board.fillStyle='blue';
// board.fillRect(0,0,width,height);
board.drawImage(bg,0,0,width,height);
text.fillStyle = "red";
text.font = "20px sans-serif";
text.strokeText("please click to start...",10,100);
var start=false;
var handlerim=new handler(ball1);
async function game(){
    
   if(!start){
    score=0;
    speed=0;
    board.fillStyle='blue';
    board.clearRect(0,0,width,height);
    text.clearRect(0,0,width,height);
    //board.fillRect(0,0,width,height);
    board.drawImage(bg,0,0,width,height);
    text.fillStyle = "red";
    text.font = "20px sans-serif";
    text.strokeText("please click to start...",10,100);

    //console.log("aaaa");
    animation=cancelAnimationFrame(animation);
   }
   else{
       //console.log("bbb");
    text.clearRect(0,0,500,500);
    speed=-2
    board.fillStyle='blue';
    board.drawImage(bg,0,0,width,height);
    text.fillStyle = "red";
    text.font = "20px sans-serif";
    text.fillText(score/10, 5, 100);
    ball1.draw(board);
    
    ball1.update();
    for(var i=0;i<borular.length;i++){
        //console.log(borular.length);
        borular[i].draw(board,width, height);
        if(borular[i].x==100){
            //console.log("Creating a new boru")
            var boru2=new boru(board,width,height);
            borular.push(boru2);
        }
        if( !control(board,ball1,borular[i],height,width)){
            await sleep(2000)
            console.log("wake")
            borular=[];
            borular.push(new boru(board,width,height));
            ball1.x=40;
            ball1.y=height/2;

            
            if(animation)
            animation =cancelAnimationFrame(animation);
            
            
        }
        if (borular[i]!=undefined)
        borular[i].x+=speed;
        
    }
        

   }
        
        animation=requestAnimationFrame(game);
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 function control(board,ball,boru,height,width){
    
    if ( boru.x<=ball.x && ball.x<boru.width+boru.x){
        if(ball.y<=boru.height || boru.height+boru.space<ball.y){
        start = false; 
        return false;
            
        }
        else
            score++;
            
            
        }
        
        
        return true;
}




