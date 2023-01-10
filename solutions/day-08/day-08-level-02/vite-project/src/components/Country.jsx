import { useEffect, useState } from 'react';
import Info from './Info';

const Country = () => {
  const [randomNumber, setRandomNumber] = useState([0]);
  const [countryInfo, setCountryInfo] = useState({});

  const { country, capital, language, population, currency, flag } = countryInfo;

  const fetchData = async (number) => {
    const countries = await fetch('https://restcountries.com/v3.1/all');
    const data = await countries.json();

    const { languages, currencies, population, translations, flags, capital } = data[number];
    const [language] = Object.values(languages);
    const [currency] = Object.values(currencies);

    const populationFormatted = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    setCountryInfo({
      country: translations.por.common,
      flag: flags.svg,
      capital: capital,
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
    <>
      <div className='card'>
        <img src={flag} alt={country} />
        <h1>{country}</h1>
        <div className='infos'>
          <Info title={'Capital:'}>{capital}</Info>
          <Info title={'Language:'}>{language}</Info>
          <Info title={'Population:'}>{population}</Info>
          <Info title={'Currency:'}>{currency}</Info>
        </div>
      </div>
      <button onClick={generateRandomNumber}>Select country</button>
    </>
  );
};

export default Country;
