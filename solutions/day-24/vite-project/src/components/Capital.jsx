const Capital = ({ capital }) => {
  if (capital) {
    return <p>Capital: {capital.length > 1 ? capital[0] : capital}</p>;
  }
  return;
};

export default Capital;
