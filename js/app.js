
$('.bg1').css('background-image', 'url(images/tennisCourt.jpg)');
//code for making an image a button found at http://www.jquerybyexample.net/2012/09/how-to-assign-custom-image-to-jquery-ui-button.html
$('#btnClose').text('').append('<img src=images/drawDeck.png width=200 height=200/>').button();

//start game
$('.start-game').on('click', (e) => {

//get user's name and append to Scoreboard
	const user = prompt("Please enter your name:", "Enter Name Here");
	if (user == null || user == "") {
 		let txt = "User cancelled the prompt.";
	}else {
 		txt = user;
		}

   	const player = $('#p1name').text(txt);

//pick random name from compName array and append to Scoreboard
   	const compName = ["S.Williams", "V.Williams","Stephens", "Keys", "Wozniaki", "Halep", "Ostepenko", "Federer", "Nadal", "Kyrgyios", "Sock"];
   	
   	const name = compName[Math.floor(Math.random() * compName.length)]
   	const compPlayer = $('#p2name').text(name);


//coin toss to choose server
//player chooses heads or tails button
let $h3 = ('<h3/>')
$('.span1').append($h3).text("Input '0' for Heads or '1' for Tails to select your toss preference, then press the Toss Coin button to see determine which player serves first.");

$('#submit-btn').on('click', () => {

	const tossChoice = $('#input-box').val();
	//console.log(tossChoice);
//player presses Toss Coin Button
$('.tossCoin').on('click', (e) => {
	//console.log("Coin Toss button works");

	function coinToss(){
	return Math.floor(Math.random() * 2);
	}
	console.log(coinToss());	
	if (tossChoice == coinToss()){
		//console.log(txt + " serves first.");
		$('.span2').append($h3).text(txt + " serves first.");
	}else{
		//console.log(name + " serves first.");
		$('.span2').append($h3).text(name + " serves first.");
	}
})//toss Coin button
})//submit-btn


$('.play').on('click', (e) => {
	console.log("play button works");
	
//create game object
const game = {
				playerPoints: 0,
				playerScore: 0,
				computerPoints: 0,
				computerScore: 0,
				gamesWonbyPlayer: 0,
				gamesWonbyComputer: 0,
				setsWonbyPlayer: 0,
				setsWonbyComputer: 0
		};	

//create deck array
	
const deck = [{suit: "Hearts",face: "ah.gif", value: 14},{suit: "Hearts", face: "2h.gif", value: 2},
			{suit: "Hearts", face: "3h.gif", value: 3},
			{suit: "Hearts", face: "4h.gif", value: 4}, {suit: "Hearts", face: "5h.gif", value: 5},
			{suit: "Hearts", face: "6h.gif", value: 6},{suit: "Hearts", face: "7h.gif", value: 7},
			{suit: "Hearts", face: "8h.gif", value: 8}, {suit: "Hearts", face: "9h.gif", value: 9},
			{suit: "Hearts", face: "10h.gif", value: 10}, {suit: "Hearts", face: "jh.gif", value: 11},
			{suit: "Hearts", face: "qh.gif", value: 12}, {suit: "Hearts", face: "kh.gif", value: 13},
			{suit: "Diamonds", face: "ad.gif", value: 14}, 
			{suit: "Diamonds", face: "2d.gif", value: 2},{suit: "Diamonds", face: "3d.gif", value: 3},
			{suit: "Diamonds", face: "4d.gif", value: 4}, {suit: "Diamonds", face: "5d.gif", value: 5},
			{suit: "Diamonds", face: "6d.gif", value: 6},{suit: "Diamonds", face: "7d.gif", value: 7},
			{suit: "Diamonds", face: "8d.gif", value: 8}, {suit: "Diamonds", face: "9d.gif", value: 9},
			{suit: "Diamonds", face: "10d.gif", value: 10}, {suit: "Diamonds", face: "jd.gif", value: 11},
			{suit: "Diamonds", face: "qd.gif", value: 12}, {suit: "Diamonds", face: "kd.gif", value: 13},
			{suit: "Clubs", face: "ac.gif", value: 14}, 
			{suit: "Clubs", face: "2c.gif", value: 2},{suit: "Clubs", face: "3c.gif", value: 3},
			{suit: "Clubs", face: "4c.gif", value: 4}, {suit: "Clubs", face: "5c.gif", value: 5},
			{suit: "Clubs", face: "6c.gif", value: 6},{suit: "Clubs", face: "7c.gif", value: 7},
			{suit: "Clubs", face: "8c.gif", value: 8}, {suit: "Clubs", face: "9c.gif", value: 9},
			{suit: "Clubs", face: "10c.gif", value: 10}, {suit: "Clubs", face: "jc.gif", value: 11},
			{suit: "Clubs", face: "qc.gif", value: 12}, {suit: "Clubs", face: "kc.gif", value: 13},
			{suit: "Spades", face: "as.gif", value: 14}, 
			{suit: "Spades", face: "2s.gif", value: 2},{suit: "Spades", face: "3s.gif", value: 3},
			{suit: "Spades", face: "4s.gif", value: 4}, {suit: "Spades", face: "5s.gif", value: 5},
			{suit: "Spades", face: "6s.gif", value: 6},{suit: "Spades", face: "7s.gif", value: 7},
			{suit: "Spades", face: "8s.gif", value: 8}, {suit: "Spades", face: "9s.gif", value: 9},
			{suit: "Spades", face: "10s.gif", value: 10}, {suit: "Spades", face: "js.gif", value: 11},
			{suit: "Spades", face: "qs.gif", value: 12}, {suit: "Spades", face: "ks.gif", value: 13}];

			//console.log(deck);

//played cards array			
const discard = [];
//shuffle deck
function shuffle(){
	for(i = 0; i < deck.length; i++){
		let randomCard = deck[(Math.floor(Math.random() * deck.length))]
		let temp = deck[i];
		deck[i] = randomCard;
		randomCard = temp;
	}
}
shuffle(deck);
//console.log(deck);

//game loop
//need to link toss win with 1st draw
//if (tossChoice != coinToss){
	//computerTurn()
//}


//draws one card
function drawCard(){
	let currentCard = 0;
	if (currentCard < deck.length){
		let removeCard = deck.shift();
		console.log (removeCard);//this card is never shown, only discarded
		discard.unshift(removeCard);
		return deck[currentCard++];//the only way i can get this not to repeat same card is to put remove statements first
	}else{
		return null;
	}
}

//need a game loop
//while ((game.playerPoints || game.computerPoints) != 0){
	//takeTurn();
//}

$('#btnClose').on('click', (e) => {
	function takeTurn(){
		const playerCard = drawCard();
		console.log(playerCard);

		const computerCard = drawCard();
		console.log(computerCard);
	
		if(playerCard.value > computerCard.value){
			game.playerPoints++;
		}else{
			game.computerPoints++;
		}
	}

function calculatePlayerScore(){
	if (game.playerPoints = 1){
		game.playerScore = 15;
	}else if(game.playerPoints = 2){
		game.playerScore = 30;
	}else if(game.playerPoints = 3){
		game.playerScore = 40;
	}else if (game.playerPoints = 4){
		console.log("Game - " + txt);
	}
}

function calculateComputerScore(){
	if (game.computerPoints = 1){
		game.computerScore = 15;
	}else if(game.computerPoints = 2){
		game.computerScore = 30;
	}else if(game.computerPoints = 3){
		game.computerScore = 40;
	}else if (game.computerPoints = 4){
		console.log("Game - " + name);
	}
}

takeTurn();
	console.log(game.playerPoints);
	console.log(game.playerScore);//playerScore will not update 
	console.log(game.computerPoints);
	console.log(game.computerScore);//computerScore will not update
// takeTurn();
// 	console.log(game.playerPoints);
// 	console.log(game.computerPoints);
// takeTurn();
// 	console.log(game.playerPoints);
// 	console.log(game.computerPoints);
// takeTurn();
// 	console.log(discard);
// 	console.log(game.playerPoints);
// 	console.log(game.computerPoints);
// 	console.log(game.playerScore);
// 	console.log(game.computerScore);
// calculatePlayerScore();
// calculateComputerScore();
// console.log(game.playerScore);
// console.log(game.computerScore);

})//corresponds to draw card button
})//corresponds to play button
})//corresponds to start game button


//create card
// class Card {
// 	constructor(suit, face, value){
// 		this.suit = suit;
// 		this.face = face;
// 		this.value = value;
// 	}

// 	getSuit(){
// 		return suit;
// 	}

// 	getValue(){
// 		return value;
// 	}

// 	getCardImage(){
// 		return face + value;
// 	}

