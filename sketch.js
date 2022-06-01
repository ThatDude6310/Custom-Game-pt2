var bg
var player , playerImg
var bullet , bulletImg , bulletGroup
var ammo = 15 , life = 3
var heart1 ,heart2 ,heart3 , heartImg
var zombieGroup , zombieWalk 
var GAMEMODE = 1
var zombies =[]
var bullets =[]
var number

function preload(){
  bg = loadImage("assets/background.jpg")
  playerImg = loadImage("assets/Player Sprite.png")
  bulletImg = loadImage("assets/Bullet.png")

  heartImg = loadImage("assets/heart.webp")

  zombieWalk = loadAnimation("assets/w1.png","assets/w2.png","assets/w3.png","assets/w4.png","assets/w5.png","assets/w6.png","assets/w7.png","assets/w8.png","assets/w9.png","assets/w10.png","assets/w11.png","assets/w12.png")

}

function setup() {
  createCanvas(windowWidth-50,windowHeight-50);

  number = 0;

	bulletGroup = new Group()
  
  
  /*player = createSprite(width-500,height/2)
  player.addImage(playerImg)
  player.scale = 0.45*/

  player = new Player(width-500,height/2)

  heart1 = createSprite(width/26,height/15)
  heart1.addImage(heartImg)
  heart1.scale = 0.1

  heart2 = createSprite(width/10,height/15)
  heart2.addImage(heartImg)
  heart2.scale = 0.1

  heart3 = createSprite(width/6.1,height/15)
  heart3.addImage(heartImg)
  heart3.scale = 0.1

  bulletGroup = createGroup(); 
  zombieGroup = createGroup();

  scoreboard= createElement("h1");
}

function draw() {

  console.log(width)

  background(bg); 
  

  if (GAMEMODE === 1) {

    player.display()
    
    
    if(mouseIsPressed){
			bullet = createSprite(player.x, player.y, 1, 5)
			bullet.lifetime = 100
			bulletGroup.add(bullet)
        	xx = player.x
            yy = player.y
            bulletx = mouseX
            bullety = mouseY
            //console.log(this.bulletx)
            //console.log(this.bullety)
            distancex = bulletx - xx
            distancey = bullety - yy
            bullet.velocityX =  distancex/10
            bullet.velocityY =  distancey/10
			
        }
        player.move()
    edges= createEdgeSprites();
    //player.collide(edges)

  //spawnZombie()

  scoreboard.html("Bullets Left: "+ammo)
  scoreboard.style('color:red'); 
  scoreboard.position(width-250,height-850)

  /*if(keyWentDown("space") && ammo>0){
    shootBullet();
  }*/

  

  }
  if (life===3) {
    heart1.visible = true
    heart2.visible = true
    heart3.visible = true
  }

  if (life===2) {
    heart1.visible = true
    heart2.visible = true
    heart3.visible = false
  }

  if (life===1) {
    heart1.visible = true
    heart2.visible = false
    heart3.visible = false
  }

    if (life===0) {
      GAMEMODE = 2
      heart1.visible = false
      heart2.visible = false
      heart3.visible = false
    }

    /*for (let index = 0; index < bullet.length; index++) {
      shootBullet(bullets[index],index)
      zombie_bullet_collision(index) */
      
    
  
    

  

  drawSprites()
    }


function shoot(){

}

function shootBullet(){
  ammo = ammo-1
  bullet= createSprite(player.x-60, player.y, 50,20)
  bullet.y= player.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityX= -7
  
  bulletGroup.add(bullet)
}

function spawnZombie(){
  if (frameCount%60===0) {
    var zombie = createSprite(50,random(width/5-400,width/4+500))
    zombie.addAnimation("walk",zombieWalk)
    zombie.velocityX = 5
    zombie.scale = 2
    zombie.lifetime = 1000
    zombie.y = player.y
    //zombies.push(zombie)
    
    zombieGroup.add(zombie)
  }

 
}

function zombie_bullet_collision(index){


}





