var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //intiating the database
    database=firebase.database()
    //read the values from database
    database.ref("ball/position").on("value",function(data){
      var pos = data.val()
      ball.x = pos.x
      ball.y = pos.y
    })
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
//writing the values to the database
function changePosition(x,y){
   database.ref("ball/position").set({
     x:ball.x+x,
     y:ball.y+y,
   })
}