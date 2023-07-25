var canvas = new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

blockHeight=30;
blockWidth=30;
var playerObject="";
var blockObject="";

function playerUpdate(){
fabric.Image.fromURL("player.png",function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top:playerY,
        left:playerX
    })
    canvas.add(playerObject);
})
}

function blockUpdate(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockObject);
    })
    }

    window.addEventListener("keydown",myKeyDown)
    function myKeyDown(e){
    keyPressed=e.keyCode
     console.log(keyPressed)
     if(keyPressed=='80' &&  e.shiftKey==true){
      blockHeight= blockHeight+10
      blockWidth= blockWidth+10
      document.getElementById("height").innerHTML=blockHeight
      document.getElementById("width").innerHTML=blockWidth
      //shift p pressionadas juntas aumentam o tamanho do bloco   
     }
     
     if(keyPressed=='77' &&  e.shiftKey==true){
        blockHeight= blockHeight-10
        blockWidth= blockWidth-10
        document.getElementById("height").innerHTML=blockHeight
        document.getElementById("width").innerHTML=blockWidth
        //shift e m pressionadas juntas diminuem o tamanho do bloco   
       }
       
       if(keyPressed=='85'){
           blockUpdate("tartaruga gritando.jpg")
        }
    }