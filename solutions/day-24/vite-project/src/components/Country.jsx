import usePagination from '../hooks/usePagination';
import useCountries from '../hooks/useCountries';
import CountryCard from './CountryCard';
import SearchInput from './SearchInput';
import Pagination from './Pagination';
import { useState } from 'react';

const Countries = () => {
  const data = useCountries();
  const [search, setSearch] = useState('');
  const { page, setPage, perPage } = usePagination();

  const filterData = (data, search) =>
    data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    
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
