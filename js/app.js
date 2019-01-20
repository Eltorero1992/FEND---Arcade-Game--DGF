// Enemies our player must avoid
var Enemy = function (randomSet) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    let [x,y,speed] = randomSet;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.startingPosition = randomSet;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x += this.speed * dt


    if ( this.x < -55 || this.x > 459){
            this.startingPosition = randomSet ();
            this.x = this.startingPosition[0]
            this.y = this.startingPosition[1]
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
        this.startingPosition = [x,y];
        this.sprite = 'images/char-boy.png'


    }

        update(){

            switch(true){
                case (this.x < 0):
                this.x = 0;
                break;

                case (this.x > 404):
                this.x = 404;
                break;

                case (this.y > 373.5):
                this.y = 373.5;
                break;

                case (this.y < 41.5):
                this.x = 101 * 2;
                this.y = 83*4 + (83/2);
                break;
            }

            // if ( this.x < 0 || this.x > 404 || this.y < 41.5 || this.y > 375.5){
            //         this.x = 101 * 2;
            //         this.y = 83*4 + (83/2);
            // };

        };


        render(){

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

const randomSet = () => {

    const minPos = Math.ceil(0);
    const maxPos = Math.floor(3);
    const minSp = Math.ceil(100);
    const maxSp = Math.floor(400);

    let randomIntPos = Math.floor(Math.random() * (maxPos - minPos)) + minPos;
    let randomIntSp = Math.floor(Math.random() * (maxSp - minSp)) + minSp

    let randomSet = [];


    switch (randomIntPos){
        case 0:
        randomSet = [0,207.5,randomIntSp];
        break;

        case 1:
        randomSet = [0,124.5,randomIntSp]
        break;

        case 2:
        randomSet = [0,41.5,randomIntSp]
        break;
    }

    return randomSet
}

class collectable {

    constructor (randomSet){

        let [x,y] = randomSet
        this.x = x
        this.y = y
        this.sprite = 'images/Gem Blue.png'
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(randomSet()), new Enemy(randomSet()), new Enemy(randomSet()), new Enemy(randomSet())]

// Place the player object in a variable called player
let player = new playerObject

let allCollectables = [new collectable([0,202])]

const checkCollisions = () => {

    allEnemies.forEach(function(enemy) {
        if (Math.ceil(player.y) === Math.ceil(enemy.y)) {
            if ((Math.ceil(player.x) <= ((Math.ceil(enemy.x)) + 55) && Math.ceil(player.x) >= (Math.ceil(enemy.x)-55))) {

                    player.x = player.startingPosition[0];
                    player.y = player.startingPosition[1];

                console.log("collision registered")
            }
        }
    });
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

document.addEventListener('click', function (){
            if(event.target.nodeName === "IMG") {
                    player.sprite = event.target.attributes.src.nodeValue
                    console.log (player.sprite);
                }
            })
