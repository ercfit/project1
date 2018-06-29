# project1

User Stories:

Game: Tennis Wars

BLUF: playing card game modeled after "WAR" with Tennis Scoring and Rules

Visual Components:
-playing field/court
-52 card deck
-Scoreboard

Rules:
Shuffle Deck

Each player picks a card--high card determines who serves 1st

The "server" leads game play until the game is over, then player 2 serves (leads play).

The player with the highest card wins the point--this can be the servers or the other player.

Scoring is 0, 15, 30, 40 for each game.

If players are tied at 40-40 (duece), "AD" scoring is initiated.
  -if the server wins the next point, the score is "Ad-in", 
  -else if the other player wins the point the score is "Ad-out"
    -if whomever has the "AD" wins the next point, that player wins the game, 
    -else if the other person wins the point, the score goes back to 40-40 (duece).
    
A match is won by the best of 3 sets winner.

Each set is won by the 1st person to win 6 games.
  -the winner must win by 2 games (i.e. if score is 6-5, must win by 7-5)
  -if score is 6-6
    -play a 7 point tiebreak(sudden death), where scoring is 1, 2, 3,....7--must win by 2.



Technical Requirements
Your app must:

HAVE IT's OWN REPO, under your github Name, NOT A FORK

Include Wireframes and User Stories - Project must be approved Before you start coding

Wireframe - Basically draw out what your game will look like, can use papers or any wireframe tool you find online

User Stories - Should be the words of how a user interacts with your game
  1. The user click starts and the level starts
  2. When the user hits the f key a fire ball is catuplulated into the galaxy.
  
Render a game in the browser

Switch turns between two players, if your game doesn't make sense for two players talk to your local instructor about it

Design logic for winning & visually display which player won

Include separate HTML / CSS / JavaScript files

Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles

Use Javascript or jQuery for DOM manipulation

Deploy your game online, where the rest of the world can access it

Use semantic markup for HTML and CSS (adhere to best practices)

Be Reasonably Complex

Necessary Deliverables
  - A working MVP (minium viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP.
  - A working game, built by you, hosted somewhere on the internet
  - A link to your hosted working game in the URL section of your Github repo
  - A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
  - A README.md file with an explanation of what the project is and why you made it, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable). In this project, also include your wireframes in the readme.
