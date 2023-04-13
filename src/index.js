import './styles.css';
import receiveList from '../modules/getDataFromApi';

const scoreList = document.querySelector('.score-list');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const formbtn = document.querySelector('.form-btn');
const form = document.querySelector('#form');
const refreshbtn = document.querySelector('.recent-btn');

formbtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  let namevalue = name.value;
  let scorevalue = score.value;
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kabirmybaby/scores/', {
  method: 'POST',
  body: JSON.stringify({
    "user":namevalue,
    "score":scorevalue
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
   form.reset();
});

refreshbtn.addEventListener('click',receiveList.runList)


