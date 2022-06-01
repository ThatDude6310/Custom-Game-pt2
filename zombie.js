class Zombie{
    constructor(x,y){
        this.sprite = createSprite(x, y, 20, 20)
        //this.toPlayer()
    this.sprite.debug = true

    /*this.toPlayer = function(){
        if(this.sprite.x < player.x && this.sprite.y < player.y){
            this.sprite.velocityX = 2//(mouseX - this.spritee.x)/100
            this.sprite.velocityY = 2//(mouseY - this.spritee.y)/100
      
            }else if(this.sprite.x > player.x && this.sprite.y < player.y){
              this.sprite.velocityX = -2//(mouseX - this.spritee.x)/100
              this.sprite.velocityY = 2//(mouseY - this.spritee.y)/100
            }else if(this.sprite.x < player.x && this.sprite.y > player.y){
              this.sprite.velocityX = 2//(mouseX - this.spritee.x)/100
              this.sprite.velocityY = -2//(mouseY - this.spritee.y)/100
      
            }else if(this.sprite.x > player.x && this.sprite.y > player.y){
              this.sprite.velocityX = -2//(mouseX - this.spritee.x)/100
              this.sprite.velocityY = -2//(mouseY - this.spritee.y)/100
      
            }else if(this.sprite.x == player.x && this.sprite.y > player.y){
                this.sprite.velocityX = 0
                this.sprite.velocityY = -2
            }else if(this.sprite.x == player.x && this.sprite.y < player.y){
              this.sprite.velocityX = 0
              this.sprite.velocityY = 2
          }else if(this.sprite.x > player.x && this.sprite.y == player.y){
            this.sprite.velocityX = -2
            this.sprite.velocityY = 0
        }else if(this.sprite.x < player.x && this.sprite.y == player.y){
          this.sprite.velocityX = 2
          this.sprite.velocityY = 0
      }else{
        this.sprite.velocityX = 0
          this.sprite.velocityY = 0
      }
    }*/
    }

    follow(player){
      if(this.sprite.x < player.x && this.sprite.y < player.y){
        this.sprite.velocityX = 1//(mouseX - this.spritee.x)/100
        this.sprite.velocityY = 1//(mouseY - this.spritee.y)/100
  
        }else if(this.sprite.x > player.x && this.sprite.y < player.y){
          this.sprite.velocityX = -1//(mouseX - this.spritee.x)/100
          this.sprite.velocityY = 1//(mouseY - this.spritee.y)/100
        }else if(this.sprite.x < player.x && this.sprite.y > player.y){
          this.sprite.velocityX = 1//(mouseX - this.spritee.x)/100
          this.sprite.velocityY = -1//(mouseY - this.spritee.y)/100
  
        }else if(this.sprite.x > player.x && this.sprite.y > player.y){
          this.sprite.velocityX = -1//(mouseX - this.spritee.x)/100
          this.sprite.velocityY = -1//(mouseY - this.spritee.y)/100
  
        }else if(this.sprite.x == player.x && this.sprite.y > player.y){
            this.sprite.velocityX = 0
            this.sprite.velocityY = -1
        }else if(this.sprite.x == player.x && this.sprite.y < player.y){
          this.sprite.velocityX = 0
          this.sprite.velocityY = 1
      }else if(this.sprite.x > player.x && this.sprite.y == player.y){
        this.sprite.velocityX = -1
        this.sprite.velocityY = 0
    }else if(this.sprite.x < player.x && this.sprite.y == player.y){
      this.sprite.velocityX = 1
      this.sprite.velocityY = 0
  }else{
    this.sprite.velocityX = 0
      this.sprite.velocityY = 0
  }

    }

    isShot(bullet){
      if(bullet.isTouching(this.sprite)){
        console.log("destroyed")
        this.sprite.destroy()
        

      }
    }
  }