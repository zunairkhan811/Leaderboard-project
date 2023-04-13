class Receive {
  async getData() {
    const scoreData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kabirmybaby/scores/', {
      method: 'GET',
    });
    const data = scoreData.json();
    if (!scoreData.ok) {
      return (`Error is at port ${scoreData.status}`);
    }
    return data;
  }
}

const receiveList = new Receive();

export default receiveList;
