import { useEffect, useState } from 'react';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return countries;
};

export default useCountries;
