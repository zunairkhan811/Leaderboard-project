const scoreList = document.querySelector('.score-list');
const receiveList ={
  runList:()=>{
    const getData = async () =>{
      const scoreData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kabirmybaby/scores/',{
        method: 'GET'
      })
      const data =  scoreData.json();
      if(!scoreData.ok){
        console.log(`Error is at port ${scoreData.status}`)
      }
          return data;
    }
    getData().then((data)=>{
      const addData = data.result;
      scoreList.innerHTML = addData.map((cgame) => ` <div class="score-items">
       <p>${cgame.user}: ${cgame.score}</p>
       </div>`).join('');
    })
    getData().catch(()=>{
      console.log(`Error occured in bringing data`)
    })
  }
}

export default receiveList
   


  