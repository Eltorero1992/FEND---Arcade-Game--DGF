# Classic Arcade Game Clone Project

This game is based on the classic frog jump game on which the frog (in this case the player) has to reach the water whilst avoiding the bugs and collecting some precious items.


## Table of Contents

* [Motivation](#motivation)
* [Build Status](#buildstatus)
* [How to Start](#howtostart)
* [How to Play](#howtoplay)
* [Bugs](#bugs)
* [Potential Improvements](#PotentialImprovements)
* [Contributing](#contributing)

## Motivation

This game is the mid stage coursework for section 3 of the Front-End Developer Nanodegree course by Udacity.

## Build Status

Finished on laptop version

## How to Start

To start the game just open the index.html file

The income screen will allow you to select a character

Click on the one you prefer and click on the button underneath to start playing

## How to Play

Use the arrow keys to move the player in all directions.

Your goal is to reach the water.

Try to avoid the bugs as hitting them will send you back to the start position and also lose a heart.

You will find collectables along the way. Try to catch them as they will boost your point scores, each collectable grants different points:

Blue Gem + 10 points
Green Gem + 20 points
Orange Gem + 30 points
Star + 50 points
Key + 60 points

Heart + 1 life (Max 3 lifes)

The game will end once you run out of heart, so think twice before you make your next move!

## Bugs

Below you can find a list of known bugs:

 1. Two collectables can be generated at the same time if a player is killed whilst collecting an item (This has been mitigated by resetting the game twice)

 2. Player can move while on the income and outcome screens

 3. While on character selection if the user presses does not press right on the character image, the character is not loaded

 4. Although the player may have all three hearts, hearts will be generated as collectables and if they are not collected no new collectables will be generated

## Potential Improvements

Below you can find a list of potetial improvements to the game, you can also find them listed throughout the code

 1. [app.js l.343] The time at which collectables are generated could be randomized

 2. [style.css l.77] Character selection CSS can be made more visual

 3. [app.js l.317] Character unlocking: Currently all characters are available to be choosen at the start of the game. In order to make the game more challenging, only the boy character is availble from the start and every time a key is collected a new character is unlocked

 4. [app.js l.304] All collectables have the same probability of appearing, by assigning them ranges of numbers the probability of appearing can be modified

 5. [app.js l.328] If a player has 3 heart do not generate more hearts, and generate other collectables


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

