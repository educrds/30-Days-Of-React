import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [{ lifespan, weight, breeds, countries, mostFrequentCountry }, setCatInfo] = useState({
    lifespan: 0,
    weight: 0,
    breeds: 0,
    countries: [],
    mostFrequentCountry: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');

        const countries = data.map(({ country_code }) => country_code);

        const countryCount = countries.reduce((counts, country) => {
          counts[country] = (counts[country] || 0) + 1;
          return counts;
        }, {});

        const mostFrequentCountry = Object.keys(countryCount).sort(
          (a, b) => countryCount[b] - countryCount[a]
        )[0];

        const uniqueCountries = [...new Set(countries)];

        const lifespanAverages =
          data
            .map(({ life_span }) => getAverageFromString(life_span))
            .reduce((acc, curr) => acc + curr) / data.length;

        const weightAverages =
          data
            .map(({ weight }) => getAverageFromString(weight.metric))
            .reduce((acc, curr) => acc + curr) / data.length;

        setCatInfo({
          lifespan: lifespanAverages.toFixed(2),
          weight: weightAverages.toFixed(2),
          breeds: data.length,
          countries: uniqueCountries,
          mostFrequentCountry: mostFrequentCountry,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getAverageFromString = str => {
    let numbers = str.match(/\d+/g).map(Number);
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  };

  return (
    <div className='App'>
      <h1>30 Days of React</h1>
      <h2>There are {breeds} cat breeds.</h2>
      <h3>
        An average a cat can weight about {weight} kg and live {lifespan} years.
      </h3>
      <hr />
      <h2>Countries with cat breeds</h2>
      <p>{countries.join(' | ')}</p>
      <hr />
      <h2>Most frequent country with cat breed</h2>
      <p>{mostFrequentCountry}</p>
    </div>
  );
};
export default App;
