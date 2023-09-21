const optionBtns = document.querySelectorAll('.option');
const userHand = document.querySelector('#userHand');
const cpuHand = document.querySelector('#cpuHand');
const result = document.querySelector('.result p')
const userScore = document.querySelector('#userScore')
const cpuScore = document.querySelector('#cpuScore')
const optionsBar = document.querySelector('.options')

let uScore = 0, cScore = 0;

const startGame = () => {
  const btn = document.querySelector(".intro button");
  const intro = document.querySelector(".intro");
  const game = document.querySelector(".game");

  btn.addEventListener('click', ()=>{
  	intro.classList.add('fadeOut');
  	game.classList.remove('fadeOut');
  	game.classList.add('fadeIn');
  })
}
startGame()

optionBtns.forEach(btn => btn.addEventListener('click', () =>{

	cpuHand.src = userHand.src = 'img/hrock.png';
	result.innerText = 'Wait...';
	userHand.classList.add('userHandShake');
	cpuHand.classList.add('cpuHandShake');
	optionsBar.classList.add('disableBtns')

	let time = setTimeout(()=>{
		optionsBar.classList.remove('disableBtns');
		userHand.classList.remove('userHandShake');
		cpuHand.classList.remove('cpuHandShake');
		const user = btn.dataset.optionName.charAt(0)
		const cpu = computerTurn();

		userHand.src = `img/h${showHands(user)}.png`
		cpuHand.src = `img/h${showHands(cpu)}.png`

		const resultTurn = checkWinner(user,cpu);

		if (resultTurn === 'Draw'){
			result.innerText = "Draw! Try again."	
		} else if (resultTurn === 'Win') {
			result.innerText = "You Win";
			uScore++;
			userScore.innerText = uScore; 	
		} else {
			result.innerText = "You Lose";
			cScore++;
			cpuScore.innerText = cScore;
		}
	},2500)


}))

function computerTurn () {
	const random = Math.floor(Math.random()*3);
	const options = ['r','p','s'];
	return options[random]
}

function checkWinner(userChoice, cpuChoice){
	switch(userChoice+cpuChoice){
		case 'rr':
		case 'pp':
		case 'ss':
			return 'Draw'
			break
		case 'rs':
		case 'pr':
		case 'sp':
			return 'Win'
			break
		case 'rp':
		case 'ps':
		case 'sr':
			return 'Lose'
	}
}

function showHands(letter) {	
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	return 'Scissors'
}