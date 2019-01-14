// Enemies our player must avoid
var Enemy = function(x , y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    x = 0;
    y = 207.5;

    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x += 1000 * dt

    if ( this.x < -55 || this.x > 459){
            this.x = -55;
            this.y = 207.5;
        console.log(this.x, this.y)
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    return [this.x]
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class playerObject {

    constructor(x ,y){
        x = 101 * 2;
        y = 83*4 + (83/2);
        this.x = x;
        this.y = y;


    }

        update(){

            if ( this.x < 0 || this.x > 404 || this.y < 41.5 || this.y > 375.5){
                    this.x = 101 * 2;
                    this.y = 83*4 + (83/2);
                console.log(this.x, this.y)
            }
            // console.log(positionX,positionY);

        }

        render(){
            this.sprite = 'images/char-boy.png';
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

        }

        handleInput(key){


                switch (key){
                    case 'up':
                        this.y -= 83
                        console.log('up')
                        break;

                    case 'down':
                        this.y += 83
                        console.log('down')
                        break;

                    case 'right':
                        this.x += 101
                        console.log('right')
                        break;

                    case 'left':
                        this.x -= 101
                        console.log('left')
                        break;

                }
        }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy]
// Place the player object in a variable called player
let player = new playerObject

const checkCollisions = () => {

            if (Math.ceil(player.x) === (Math.ceil(allEnemies[0].x)) && Math.ceil(player.y) === Math.ceil(allEnemies[0].y)) {

                    player.x = 101 * 2;
                    player.y = 83*4 + (83/2);

                console.log("collision registered")
            }

    // console.log(player.x, Enemy[0].x)

        // allEnemies.forEach(function(enemy) {
        //     if (player.x === Enemy.x) {
        //         console.log("collision registered")
        //     }
        // });
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
