const game = ()=> {
  let pScore = 0;
  let cScore = 0;
  //start the game
  const startGame = ()=>{
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click",()=>{
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = ()=>{
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //computer options
    const computerOptions = ['rock', 'paper', 'scissor'];

    options.forEach(option=>{
      option.addEventListener('click',function(){
        //computer choice
        const computerNumber =Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //here we call compare hands
        compareHands(this.textContent,computerChoice);
        //update images
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `assets/${computerChoice}.png`;

        
      });
    });    
  };

  const upadateScore = ()=>{
    const playerScore = document.querySelector('.player-score p');
    const ComputerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    ComputerScore.textContent = cScore;
  }

  const compareHands = (playerChoice,computerChoice)=>{
    const winner = document.querySelector('.winner');
    //checking for a tie
    if(playerChoice === computerChoice){
      winner.textContent = 'Oops! It is a tie';
      return;
    }

    //checking for rock
    if(playerChoice === 'rock'){
      if(computerChoice === 'scissor'){
        winner.textContent = 'Player Wins';
        pScore++;
        upadateScore();
        return;
      }else{
        winner.textContent = 'Computer Wins';
        cScore++;
        upadateScore();
        return;
      }
    }

    //check for paper
    if(playerChoice === 'paper'){
      if(computerChoice === 'scissor'){
        winner.textContent = 'Computer Wins';
        cScore++;
        upadateScore();
        return;
      }else{
        winner.textContent = 'Player Wins';
        pScore++;
        upadateScore();
        return;
      }
    }

    //check for scissor
    if(playerChoice === 'scissor'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Computer Wins';
        cScore++;
        upadateScore();
        return;
      }else{
        winner.textContent = 'Player Wins';
        pScore++;
        upadateScore();
        return;
      }
    }
  };

  //call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();