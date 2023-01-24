import { useState } from 'react';
import useCountries from './useCountries';

const useSearch = () => {
  const [search, setSearch] = useState('');
  const data = useCountries();

  return { data, search, setSearch };
};

export default useSearch;
