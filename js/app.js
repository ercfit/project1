
$('.bg1').css('background-color', 'green');

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
})
})

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

// }

$('.play').on('click', (e) => {
	console.log("play button works");
	

//create game object
//create deck object
	
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
			console.log(deck);

			// function deal(){
			// 	let currentCard = 0;
			// 	if (currentCard < deck.length)
			// 		return deck[currentCard++];
			// 	else
			// 		return null;
			// }
			// deal(deck);
})
})
// const game = {
// 				cardsPlayed: 0,
// 				playerPoints: 0,
// 				playerScore: 0,
// 				computerPoints: 0,
// 				computerScore: 0,
// 				currentGame: 1,
// 				currentSet: 1,
// 				gamesWonbyPlayer: 0,
// 				gamesWonbyComputer: 0,
// 				setsWonbyPlayer: 0,
// 				setsWonbyComputer: 0
// 		}

// };
// calculatePlayerScore()
// if (playerPoints = 1){
// 	playerScore = 15
// }if(playerPoints = 2){
// 	playerScore = 30
// }if(playerPoints = 3){
// 	playerScore = 40
// };

// calculateComputerScore()
// if (computerPoints = 1){
// 	computerScore = 15
// }if(computerPoints = 2){
// 	computerScore = 30
// }if(computerPoints = 3){
// 	computerScore = 40
// };







// 			function startMatch(){
// 				$('.play').on('click', (e) => {
// 					e.preventDefault();
// 					console.log("press 'draw' button to draw a card. The player with the highest card serves first.");
// 				}


// 			}







//set up a handler to draw cards
// const $drawCard = $('.drawCard');
// 	$(drawCard).on('click', (deck) => {	
// 		deck.draw();
// 	})


//each player picks a card to see who goes first (**later version roll dice to see who goes first)
//
