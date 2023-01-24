import CountryCard from './CountryCard';

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
