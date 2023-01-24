import { usePagination, Pagination } from './Pagination';
import { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import SearchInput from './SearchInput';

const Countries = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const { page, setPage, perPage } = usePagination();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        setData(countries);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const filterData = (data, search) => {
    const regex = new RegExp(search, 'gi');
    return data.filter(country => regex.test(country.name.common));
  };

  const filteredData = filterData(data, search);
  const currentData = filteredData.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filteredData.length / perPage);

  return (
    <>
      <SearchInput search={search} setSearch={setSearch} />
      <div className='container'>
        {currentData.map((country, index) => (
          <CountryCard key={index} {...country} />
        ))}
      </div>
      <Pagination totalPages={totalPages} setPage={setPage} page={page} />
    </>
  );
};

export default Countries;
