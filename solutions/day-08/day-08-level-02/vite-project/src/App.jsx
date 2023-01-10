import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState([0]);
  const [countryInfo, setCountryInfo] = useState({});

  const fetchData = async (number) => {
    const countries = await fetch('https://restcountries.com/v3.1/all');
    const data = await countries.json();
    
    const [language] = Object.values(data[number].languages);
    const [currency] = Object.values(data[number].currencies);

    const population = data[number].population;
    const populationFormatted = population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setCountryInfo({
      country: data[number].translations.por.common,
      flag: data[number].flags.png,
      capital: data[number].capital[0],
      language: language,
      population: populationFormatted,
      currency: currency.name,
    });
  };

  const generateRandomNumber = () => setRandomNumber(Math.floor(Math.random() * 249));

  useEffect(() => {
    fetchData(randomNumber);
  }, [randomNumber]);

  return (
    <div className='App'>
      <div className='card'>
        <img src={countryInfo.flag} alt={countryInfo.country} />
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
