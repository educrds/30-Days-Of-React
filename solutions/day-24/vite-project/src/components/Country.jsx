import Info from './Info';
import React, { useEffect, useState } from 'react';

const Countries = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(25);
  const [search, setSearch] = useState('');

  const getCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      setData(countries);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filteredData = data.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  const currentData = filteredData.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filteredData.length / perPage);

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Country'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className='container'>
        {currentData.map(({ flags, name, capital, languages, population }, index) => (
          <div className='card' key={index}>
            <img src={flags.png} alt={name.common} />
            <h1>{name.common}</h1>
            <div className='infos'>
              {capital && (
                <Info title={'Capital:'}>{capital?.length > 1 ? capital[0] : capital}</Info>
              )}
              {languages && <Info title={'Language:'}>{Object.values(languages)[0]}</Info>}
              {population > 0 && (
                <Info title={'Population:'}>
                  {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </Info>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button onClick={() => setPage(i + 1)} disabled={i + 1 === page}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Countries;
