
$('.bg1').css('background-image', 'url(images/tennisCourt.jpg)');
//code for making an image a button found at http://www.jquerybyexample.net/2012/09/how-to-assign-custom-image-to-jquery-ui-button.html
$('#btnClose').text('').append('<img src=images/drawDeck.png width=200 height=200/>').button();

class Player {
	constructor(name){
		this.name = name;
		this.points = 0;
		this.score = 0;
		this.gamesWon = 0;
		
	}
	calculatePlayerScore(){ // = is assigning, == is checking
		if (this.points == 1){
			this.score = 15;
		}if(this.points == 2){
			this.score = 30;
		}if(this.points == 3){
			this.score = 40;
		}
	}
//calculatePlayerScore end
}//class player end


//create game object
const game = {
			"activePlayer": null,
		}	


//start game
$('.start-game').click(function(){

//get user's name and append to Scoreboard
	user1 = prompt("Player 1, enter your name:", "Enter Name Here");
	if (user1 == null || user1 == "") {
 		let txt = "User cancelled the prompt.";
	}else {
 		txt = user1;
		}

   	let player1 = $('#p1name').text(txt);

	user2 = prompt("Player 2, enter your name:", "Enter Name Here");
	if (user2 == null || user2 == "") {
 		let txt = "User cancelled the prompt.";
	}else {
 		txt = user2;
		}
   	let player2 = $('#p2name').text(txt);


	player1 = new Player(user1);
	player2 = new Player(user2);

//display coin toss buttons to choose server
// //player chooses heads or tails button

$('.span1').text("Press Heads or Tails to select your toss preference to determine which player serves first.");


displayHeadsOrTailsButtons();
coinToss();
console.log(coinToss());


function coinToss(){
	return Math.floor(Math.random()*2);
}

function displayHeadsOrTailsButtons(){
$('.heads').click(function(){
	if(coinToss() == 0){
		console.log(user1 + " serves first.");
	}else{
		console.log(user2 + " serves first");
	}
})

$('.tails').click(function(){
	if(coinToss() == 1){
		console.log(user1 + " serves first.");
	}else{
		console.log(user2 + " serves first");
	}
})
}

$('.play').on('click', (e) => {
 	console.log("play button works");
	$('.span1').hide();
	$('.heads').hide();
	$('.tails').hide();


//create deck array
	
const deck = [{suit: "Hearts",face: "ah.gif", value: 14},{suit: "Hearts", face: "2h.gif", value: 2},
			{suit: "Hearts", face: "3h.gif", value: 3},
			{suit: "Hearts", face: "4h.gif", value: 4}, {suit: "Hearts", face: "5h.gif", value: 5},
			{suit: "Hearts", face: "6h.gif", value: 6},{suit: "Hearts", face: "7h.gif", value: 7},
			{suit: "Hearts", face: "8h.gif", value: 8}, {suit: "Hearts", face: "9h.gif", value: 9},
			{suit: "Hearts", face: "th.gif", value: 10}, {suit: "Hearts", face: "jh.gif", value: 11},
			{suit: "Hearts", face: "qh.gif", value: 12}, {suit: "Hearts", face: "kh.gif", value: 13},
			{suit: "Diamonds", face: "ad.gif", value: 14}, 
			{suit: "Diamonds", face: "2d.gif", value: 2},{suit: "Diamonds", face: "3d.gif", value: 3},
			{suit: "Diamonds", face: "4d.gif", value: 4}, {suit: "Diamonds", face: "5d.gif", value: 5},
			{suit: "Diamonds", face: "6d.gif", value: 6},{suit: "Diamonds", face: "7d.gif", value: 7},
			{suit: "Diamonds", face: "8d.gif", value: 8}, {suit: "Diamonds", face: "9d.gif", value: 9},
			{suit: "Diamonds", face: "td.gif", value: 10}, {suit: "Diamonds", face: "jd.gif", value: 11},
			{suit: "Diamonds", face: "qd.gif", value: 12}, {suit: "Diamonds", face: "kd.gif", value: 13},
			{suit: "Clubs", face: "ac.gif", value: 14}, 
			{suit: "Clubs", face: "2c.gif", value: 2},{suit: "Clubs", face: "3c.gif", value: 3},
			{suit: "Clubs", face: "4c.gif", value: 4}, {suit: "Clubs", face: "5c.gif", value: 5},
			{suit: "Clubs", face: "6c.gif", value: 6},{suit: "Clubs", face: "7c.gif", value: 7},
			{suit: "Clubs", face: "8c.gif", value: 8}, {suit: "Clubs", face: "9c.gif", value: 9},
			{suit: "Clubs", face: "tc.gif", value: 10}, {suit: "Clubs", face: "jc.gif", value: 11},
			{suit: "Clubs", face: "qc.gif", value: 12}, {suit: "Clubs", face: "kc.gif", value: 13},
			{suit: "Spades", face: "as.gif", value: 14}, 
			{suit: "Spades", face: "2s.gif", value: 2},{suit: "Spades", face: "3s.gif", value: 3},
			{suit: "Spades", face: "4s.gif", value: 4}, {suit: "Spades", face: "5s.gif", value: 5},
			{suit: "Spades", face: "6s.gif", value: 6},{suit: "Spades", face: "7s.gif", value: 7},
			{suit: "Spades", face: "8s.gif", value: 8}, {suit: "Spades", face: "9s.gif", value: 9},
			{suit: "Spades", face: "ts.gif", value: 10}, {suit: "Spades", face: "js.gif", value: 11},
			{suit: "Spades", face: "qs.gif", value: 12}, {suit: "Spades", face: "ks.gif", value: 13}];

// 			//console.log(deck);

// //played cards array			
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
// //console.log(deck);

// //game loop
// //draws one card

$('#btnClose').click(function(){
	takeTurn();
})


function drawCard(){
	let currentCard = 0;
	if (currentCard < deck.length){
		let removeCard = deck.shift();
		//this card is never shown, only discarded
		discard.unshift(removeCard);
		return deck[currentCard++]
	}else{
		return null;
	}
}


function takeTurn(){
		player1Card = drawCard();
		$('#p1card').prepend(`<img src="images/cards/${player1Card.face}"/>`);
		console.log(player1Card);

		player2Card = drawCard();
		$('#p2card').prepend(`<img src="images/cards/${player2Card.face}"/>`);
		console.log(player2Card);
	
		if(player1Card.value > player2Card.value){
			player1.points++;
		}else{
			player2.points++;
		}
		player1.calculatePlayerScore();
		player2.calculatePlayerScore();
		$('#p1score').text(player1.score);
		$('#p2score').text(player2.score);
}

})//corresponds to play button
})//corresponds to start game button


