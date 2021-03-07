var Rock = document.createElement("BUTTON");
var Paper = document.createElement("BUTTON");
var Scissors  = document.createElement("BUTTON");

var options = ["Rock", "Paper", "Scissors" ];

var container = document.querySelector(".container");
var player_choice = document.querySelector(".player-Choice");
var computer_choice = document.querySelector(".computer-Choice");
var result = document.querySelector(".Result");


for(let i = 0; i<options.length ; i++ ){
	var ele = document.createElement("BUTTON");
	ele.textContent= options[i];
	container.appendChild(ele);
	ele.addEventListener("click",  () => {
		player_choice.textContent = options[i];
		let randomChoice = compChoice();
		computer_choice.textContent= options[randomChoice];
		wins(options[i],options[randomChoice])


	});

}

function wins(player, computer) {
	let winner = "computer win";
	if((player === "Rock"  && computer === "Scissors") ||
		(player === "Scissors" && computer === "Paper") ||
		(player === "Paper" && computer === "Rock")
	){
		winner = "player win"
	}else if(player === computer){
		winner = 'no one'
	}


	result.textContent = winner;
}
function compChoice() {
 var choices=[...options];
 const random = Math.floor(Math.random() * choices.length);
 return random
}
