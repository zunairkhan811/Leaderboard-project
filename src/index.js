import "./styles.css";

const scoreList = document.querySelector('.score-list');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const formbtn = document.querySelector('.form-btn');

if(scoreList.textContent.trim() === ''){
    scoreList.innerHTML = ` <div class="score-items">
    <p>Ali: 100</p>
</div>
<div class="score-items">
    <p>Aslam: 20</p>
</div>
<div class="score-items">
    <p>Akram: 30</p>
</div>`
}
    
    formbtn.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        let namevalue = name.value;
        let scorevalue = score.value;
        console.log(namevalue)
        console.log(scorevalue)
        scoreList.innerHTML += ` <div class="score-items">
        <p>${namevalue}: ${scorevalue}</p>
    </div>`
     })


  
