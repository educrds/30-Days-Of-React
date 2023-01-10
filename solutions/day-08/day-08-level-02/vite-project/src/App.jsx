import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState([0]);
  const [countryInfo, setCountryInfo] = useState({});

  const fetchData = async (number) => {
    const data = await fetch('https://restcountries.com/v3.1/all');
    const dataJSON = await data.json();
    const [language] = Object.values(dataJSON[number].languages);
    const [currency] = Object.values(dataJSON[number].currencies);

    const population = dataJSON[number].population;
    const populationFormatted = population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setCountryInfo({
      country: dataJSON[number].translations.por.common,
      flag: dataJSON[number].flags.png,
      capital: dataJSON[number].capital[0],
      language: language,
      population: populationFormatted,
      currency: currency.name,
    });
  };

  const generateRandomNumber = () =>
    setRandomNumber(Math.floor(Math.random() * 249));

  useEffect(() => {
    fetchData(randomNumber);
  }, [randomNumber]);

  return (
    <div className='App'>
      <div className='card'>
        <img src={countryInfo.flag} />
        <h1>{countryInfo.country}</h1>
        <div className='infos'>
          <p>
            Capital:
            <span> {countryInfo.capital}</span>
          </p>
          <p>
            Language: <span> {countryInfo.language}</span>
          </p>
          <p>
            Population: <span> {countryInfo.population}</span>
          </p>
          <p>
            Currency: <span> {countryInfo.currency}</span>
          </p>
        </div>
      </div>
      <button onClick={generateRandomNumber}>Select country</button>
    </div>
  );
};

export default App;
