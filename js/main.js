const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

let computerScore = 1;
let playerScore = 1;

const randomrps = ["rock", "paper","scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=> {
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomrps.length);
           computerShowIcon.className = randomrps[randomNum];
     
         
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "компютер билан дурранг ойнадингиз бу дегани ютказдингиз ";
               text.style.color = 'orange';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'orange';
           } 
           else if(showIcon.className === randomrps[0] && computerShowIcon.className === randomrps[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "компютерни ютиб хурсанд бойлайсизми? ";
               text.style.color = 'lightgreen';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'lightgreen';
           }else if(showIcon.className === randomrps[0] && computerShowIcon.className === randomrps[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "ахах компютерга ютказдингиз ахахахаха";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomrps[1] && computerShowIcon.className === randomrps[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "ахах компютерга ютказдингиз ахахахаха ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomrps[1] && computerShowIcon.className === randomrps[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "компютерни ютиб хурсанд бойлайсизми? ";
               text.style.color = 'lightgreen';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'lightgreen';
           }else if(showIcon.className === randomrps[2] && computerShowIcon.className === randomrps[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "ахах компютерга ютказдингиз ахахахаха ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomrps[2] && computerShowIcon.className === randomrps[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "компютерни ютиб хурсанд бойлайсизми? ";
               text.style.color = 'lightgreen';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'lightgreen';
           }
        });
    });
}
game();