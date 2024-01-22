let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();
  localStorage.removeItem('score');
}
 let isAutoPlaying = false;
let intervalId;

function autoPlay() {

if(!isAutoPlaying){
  
  intervalId = setInterval(function () {
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;
  
document.querySelector('.js-auto-play-button')
        .innerHTML = 'Stop Play';

    } else {
      isPlaying = false;
      clearInterval(intervalId);

      document.querySelector('.js-auto-play-button')
        .innerHTML = 'Auto Play';

}


function playGame (playerMove) {
  
  const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if(computerMove === 'rock') {
        result ='You lose.';
      }else if (computerMove === 'paper') {
        result = 'You win.';
      }else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

      } else if (playerMove === 'rock'){
        if(computerMove ==='paper') {
          result = 'You lose.'
        }else if(computerMove === 'scissors'){
          result = 'You win.';
        }else if(computerMove === 'rock'){
          result = 'Tie.';
        }
        
      } else if (playerMove === 'paper'){
        if(computerMove ==='scissors') {
        result = 'You lose.';
      }else if(computerMove === 'rock'){
        result = 'You win.';
      }else if(computerMove === 'paper'){
        result = 'Tie.';
      }
    }
  
      if (result === 'You win.'){
        score.wins += 1;
      }else if(result === 'You lose.'){
        score.losses += 1;
      }else if(result === 'Tie.'){
        score.ties += 1;
      }

      
      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();
      
      document.querySelector('.js-result').innerHTML = `${result} Computer`;

      document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> `;
    }

      function pickComputerMove() {
        const randomNumber = Math.random();
      
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          return 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          return 'paper';
        } else {
          return 'scissors';
        }
      }
      

  

  function updateScoreElement(){
      
      document.querySelector('.js-score').innerHTML = `Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
     }
    }
