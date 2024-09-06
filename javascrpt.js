let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genComputerChoice = () =>{
    const options =["paper","rock","scissors"]
     const  randidx = Math.floor(Math.random() * 3 )
     return options[randidx]



}
 const drawGame = () => {
    msg.innerText = "Game was draw play again"
    msg.style.backgroundColor = "black"
 }
 const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userScore++
        userScorepara.innerHTML = userScore
        msg.innerText = ` You Win! rock beats paper`
        msg.style.backgroundColor="red"
        msg.style.color="pink"
    }else{
        
        compScore++
        compScorepara.innerHTML = compScore

        msg.innerText = ` You Lose! scissors beats  rock`
        msg.style.backgroundColor = "red"
        msg.style.color="yellow"
    }
 }

const playGame = (userchoice) =>{
    console.log("user choice =",userchoice)
    const compchoice = genComputerChoice();
    console.log("comp choice =",compchoice)
    if(userchoice == compchoice){
        drawGame()
    } else {
        if(userchoice === "rock"){
            userchoice = compchoice === "paper" ? false : true
        }else if(userchoice ==="paper"){
            userwin = compchoice === "scissors" ? false : true
             userwin = compchoice === "rock" ? false : true

        }
        showwinner(userwin)
    }

}

choices.forEach((choice) => {
    choice.addEventListener ("click", () =>{
        const userchoice = choice.getAttribute("id")
        playGame(userchoice)

    }
)
}
)