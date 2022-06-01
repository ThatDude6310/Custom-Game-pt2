class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.bulletx = 0
        this.bullety = 0
        this.distancex = 0
        this.distancey = 0
        this.xx = 0
        this.yy = 0
        this.player = createSprite(x,y)
       
        
      
    }

    display(){
        rectMode(CENTER)
        //this.rect = rect(this.x,this.y,20,20)
        this.player.addImage(playerImg)
        this.player.scale = 0.45
    }

    move(){
        if(keyDown("w")){
            this.player.y -= 5
    
        }
        if(keyDown("a")){
            this.player.x -= 5
    
        }
        if(keyDown("d")){
            this.player.x += 5
    
        }
        if(keyDown("s")){
            this.player.y += 5
    
            
        }

        
            

        
    }

    fire(){
       
    }
}