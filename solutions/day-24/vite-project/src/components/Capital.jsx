import React from 'react';

const Capital = ({ capital }) => {
  if (!capital) {
    return null;
  }
  return <p>Capital: {capital.length > 1 ? capital[0] : capital}</p>;
};

export default Capital;
