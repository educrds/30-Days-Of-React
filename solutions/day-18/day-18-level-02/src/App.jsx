import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [{ lifespan, weight, breeds }, setCatInfo] = useState({
    lifespan: 0,
    weight: 0,
    breeds: 0
  });

  const getAverageFromString = (str) => {
    let numbers = str.match(/\d+/g).map(Number);
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  };

  const getTotalAverage = (averages) => Math.round(averages.reduce((acc, str) => acc + str, 0) / averages.length);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');

        const lifespanAverages = getTotalAverage(
          data.map(({ life_span }) => getAverageFromString(life_span))
        );
        const weightAverages = getTotalAverage(
          data.map(({ weight }) => getAverageFromString(weight.metric))
        );
        setCatInfo({ lifespan: lifespanAverages, weight: weightAverages, breeds: data.length });
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <div className='App'>
      <h1>30 Days of React</h1>
      <h2>There are {breeds} cat breeds.</h2>
      <h3>An average a cat can weight about {weight} kg and live {lifespan} years.</h3>
    </div>
  );
}

export default App;
