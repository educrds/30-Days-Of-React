import { useEffect, useState } from 'react';
import axios from 'axios';
import catFetch from './configApi';

const useAPI = endpoint => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await catFetch.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [endpoint]);

  return [data];
};

export default useAPI;
