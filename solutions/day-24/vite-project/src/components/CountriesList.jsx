import Capital from './Capital';
import Language from './Language';
import Population from './Population';

const CountryCard = ({ flags: { png }, name: { common }, capital, languages, population }) => {
  return (
    <div className='card'>
      <img src={png} alt={common} />
      <h1>{common}</h1>
      <div className='infos'>
        <Capital capital={capital} />
        <Language languages={languages} />
        <Population population={population} />
      </div>
    </div>
  );
};

const CountriesList = ({ currentData }) => {
  return (
    <div className='container'>
      {currentData.map((country, index) => (
        <CountryCard key={index} {...country} />
      ))}
    </div>
  );
};

export default CountriesList;
