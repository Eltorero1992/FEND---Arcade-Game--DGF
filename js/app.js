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

// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.

    this.x += this.speed * dt

// Positions the enemy randomly in any of the three rock rows

    if ( this.x < -55 || this.x > 459){
            this.startingPosition = randomSet ();
            this.x = this.startingPosition[0]
            this.y = this.startingPosition[1]
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class playerObject {

//Set variables for the player object {
    // Current position,
    // starting position,
    // image (needed for character selection),
    // and points}

    constructor(x ,y){
        x = 101 * 2;
        y = 83*4 + (83/2);
        this.x = x;
        this.y = y;
        this.startingPosition = [x,y];
        this.sprite = 'images/char-boy.png'
        this.points = 0;
        document.querySelector(".score").innerText = `Points: ${this.points}`;


    }

// Stops player from going out of bounds by keeping the same position from where it is.
// If a player reaches the water, 10 points are added.
// This function runs constantly.

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
                this.points += 10

// Updates HTML code to reflect new score

                document.querySelector(".score").innerText = `Points: ${this.points}`;
                break;
            }
        };

// Draws player image

        render(){

            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

        }

// Moves the player proportional amounts to always be centered on the rendered block

        handleInput(key){


                switch (key){
                    case 'up':
                        this.y -= 83
                        break;

                    case 'down':
                        this.y += 83
                        break;

                    case 'right':
                        this.x += 101
                        break;

                    case 'left':
                        this.x -= 101
                        break;

                }
        }
}

// Random function generator for the enemies object

const randomSet = () => {

    const minPos = Math.ceil(0);
    const maxPos = Math.floor(3);

// minSp and maxSp set the min and max speed boundaries for the enemies
// Please modify here if you wish to change speed

    const minSp = Math.ceil(100);
    const maxSp = Math.floor(400);

// Generates random integer from 0 to 2

    let randomIntPos = Math.floor(Math.random() * (maxPos - minPos)) + minPos;

// Generates random integer from 100 to 399

    let randomIntSp = Math.floor(Math.random() * (maxSp - minSp)) + minSp

    let randomSet = [];

// Based on the interger obtained in randomIntPos, positions enemies in any of the three rock lines

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

// Random generator for collectables

const randomSetCollectable = () => {

// Generates random integer from 0 to 4

    let randomSetCollectableX = Math.floor(Math.random()*Math.floor(5));

// Multiples random integer to position collectable in any row position

    let collectablePositionX = randomSetCollectableX*101;

// Generates random integer from 0 to 5 (Based on the number of available objects)
// If new objects wants to be introduced please increase Math.floor value to -1 of total number of objects

    let randomCollectableItem = Math.floor(Math.random()*Math.floor(6));

// Variable needed for the creation of the collectable array
// This variable carries the image of the collectable

    let collectableItem = "";

// Based on previous random integer it selects and object

    switch (randomCollectableItem){

        case 0:
            collectableItem = 'images/Gem Blue.png';
            break

        case 1:
            collectableItem = 'images/Gem Green.png';
            break

        case 2:
            collectableItem = 'images/Gem Orange.png';
            break

        case 3:
            collectableItem = 'images/Heart.png';
            break

        case 4:
            collectableItem = 'images/Key.png';
            break

        case 5:
            collectableItem = 'images/Star.png';
            break

    }

// Creates collectable array ,
// First item of the array positions collectable on the row
// Second item of the array position the collecatable on the column using the randomSet function
// Third item of the array carries the collectable image randomly generated

    let collectablePosition = [collectablePositionX,randomSet()[1],collectableItem];

    return [collectablePosition]
}

// Collectable object

class collectable {

// Variables for the collectable objects are:
// x = position on the row
// y = position on the column
// img = image of collectable

    constructor ([randomSetCollectable]){

// Destructuriing array

        let [x,y,img] = randomSetCollectable;
        this.x = x;
        this.y = y;
        this.sprite = img;
    }

// Draws collectable on the canvas

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(randomSet()), new Enemy(randomSet()), new Enemy(randomSet()), new Enemy(randomSet())]

// Place the player object in a variable called player
let player = new playerObject

// Instaciate collectables

// [POTENCIAL UPGRADE] Currently only one collectable is generated, option to have multiple collectables at the same time
let allCollectables = [new collectable(randomSetCollectable())]

const checkCollisions = () => {

// Checks the enemy position in the column vs the player's
// Check the enemy position in the row vs the player's

    allEnemies.forEach(function(enemy) {
        if (Math.ceil(player.y) === Math.ceil(enemy.y)) {
            if ((Math.ceil(player.x) <= ((Math.ceil(enemy.x)) + 55) && Math.ceil(player.x) >= (Math.ceil(enemy.x)-55))) {

// If both potitions match, takes one heart

                    document.querySelector(".lifeCounter").firstElementChild.remove();

// Sends the player back to the starting position

                    player.x = player.startingPosition[0];
                    player.y = player.startingPosition[1];
            }
        }
    });

// Checks the collectable position in the column vs the player's
// Check the collectable position in the row vs the player's

    allCollectables.forEach(function(collectableItem) {
        if (Math.ceil(player.y) === Math.ceil(collectableItem.y)) {
            if ((Math.ceil(player.x) <= ((Math.ceil(collectableItem.x)) + 55) && Math.ceil(player.x) >= (Math.ceil(collectableItem.x)-55))) {

// Based on the image of the collectable it gives different points

                    switch (true) {
                        case (collectableItem.sprite === 'images/Gem Blue.png') :
                        player.points += 10;
                        break

                        case (collectableItem.sprite === 'images/Gem Green.png') :
                        player.points += 20;
                        break

                        case (collectableItem.sprite === 'images/Gem Orange.png') :
                        player.points += 30;
                        break

                        case (collectableItem.sprite === 'images/Star.png') :
                        player.points += 50;
                        break

                        case (collectableItem.sprite === 'images/Heart.png') :

// If a Heart is collected, it increases players life +1 to a maximum of 3

                            if (document.querySelector(".lifeCounter").childElementCount < 3) {
                                document.querySelector(".lifeCounter").insertAdjacentHTML('beforeend','<img class= lifes src="images/Heart.png">')
                            }

                        break

                        case (collectableItem.sprite === 'images/Key.png') :
                        player.points += 60;
                        break
                    }

                    document.querySelector(".score").innerText = `Points: ${player.points}`;

// Removes collectable from collectables array

                    allCollectables.pop();

// Generates new random collectable every 500ms
// [POTENTIAL UPGRADE] The collectable generator could be randomized too

                    setTimeout(function () {allCollectables.push(new collectable(randomSetCollectable()))},2500);

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

// Event listener to change character appareance

document.addEventListener('click', function (){
            if(event.target.nodeName === "IMG") {

// Finds all the HTML images

                    let images = document.querySelectorAll("img");

// Deletes the class selected Character from the image

                    images.forEach(function(images) { images.classList.remove("selectedCharacter")});

// Sets the new images property for the player object

                    player.sprite = event.target.attributes.src.nodeValue

// Enlarges selected character picture

                    event.target.classList.add("selectedCharacter");
                }
            })


