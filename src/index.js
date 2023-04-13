import './styles.css';
import receiveList from '../modules/getdata.js';

const name = document.querySelector('#name');
const score = document.querySelector('#score');
const formbtn = document.querySelector('.form-btn');
const form = document.querySelector('#form');
const refreshbtn = document.querySelector('.recent-btn');
const scoreList = document.querySelector('.score-list');

formbtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  const namevalue = name.value;
  const scorevalue = score.value;
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kabirmybaby/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: namevalue,
      score: scorevalue,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  form.reset();
});

refreshbtn.addEventListener('click', () => {
  receiveList.getData().then((data) => {
    const addData = data.result;
    scoreList.innerHTML = addData.map((cgame) => ` <div class="score-items">
     <p>${cgame.user}: ${cgame.score}</p>
     </div>`).join('');
  });
  receiveList.getData().catch(() => { 'Error occured in bringing data'; });
});
